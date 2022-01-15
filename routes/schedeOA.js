const express = require('express')
const routerOA = express.Router()
const SchedaOA = require('../models/schedaOA')

async function getSchedaOA(req, res, next) {
    let schedaOA
    try {
      schedaOA = await SchedaOA.findById(req.params.id)
      if (schedaOA == null) {
        return res.status(404).json({ message: 'Cannot find scheda' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.schedaOA = schedaOA
    next()
}

routerOA.get('/', async (req,res) =>{
  //#swagger.tags = ['Schede OA']
  //#swagger.description = ''
  //#swagger.path = '/schedeOA'
  try{
    const schedeOA = await SchedaOA.find()
    res.json(schedeOA)
  }catch (err){
    res.status(500).json({message : err.message})
  }
})
  
routerOA.get('/:id', getSchedaOA, (req, res) => {
  //#swagger.tags = ['Schede OA']
  //#swagger.description = ''
  //#swagger.path = '/schedeOA/{id}'
    res.json(res.schedaOA) 
})

routerOA.get('/ogtn/:ogtn', async (req,res)=>{
  //#swagger.tags = ['Schede OA']
  //#swagger.description = 'Ricerca tramite campo'
  //#swagger.path = '/schedeOA/ogtn/{ogtn}'
  try{
    const schedeOA = await SchedaOA.find({'og.ogt.ogtn.value':{$regex : req.params.ogtn}})
    res.json(schedeOA)
  }catch (err){
    res.status(500).json({message : err.message})
  }
})

routerOA.post('/', async (req, res) => {
  //#swagger.tags = ['Schede OA']
  //#swagger.description = ''
  //#swagger.path = '/schedeOA'
    const schedaOA = new SchedaOA({
        //campo : req.body.campo
        mt : req.body.mt,
        rs : req.body.rs,
        co : req.body.co,
        dt : req.body.dt,
        cm : req.body.cm,
        au : req.body.au,
        rv : req.body.rv,
        lc : req.body.lc,
        og : req.body.og,
        cd : req.body.cd,
        ub : req.body.ub
    })
    try {
      const newSchedaOA = await schedaOA.save()
      res.status(201).json(newSchedaOA)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
})

routerOA.delete('/:id', getSchedaOA, async (req, res) => {
  //#swagger.tags = ['Schede OA']
  //#swagger.description = ''
  //#swagger.path = '/schedeOA/{id}'
  try {
    await res.schedaOA.remove()
    res.json({ message: 'Deleted Scheda' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

routerOA.patch('/:id', getSchedaOA, async (req, res) => {
  //#swagger.tags = ['Schede OA']
  //#swagger.description = ''
  //#swagger.path = '/schedeOA/{id}'

  if (req.body.mt != null) {
    res.schedaOA.mt = req.body.mt
  }
  if (req.body.rs != null) {
    res.schedaOA.rs = req.body.rs
  }
  if (req.body.co != null) {
    res.schedaOA.co = req.body.co
  }
  if (req.body.dt != null) {
    res.schedaOA.dt = req.body.dt
  }
  if (req.body.cm != null) {
    res.schedaOA.cm = req.body.cm
  }
  if (req.body.au != null) {
    res.schedaOA.au = req.body.au
  }
  if (req.body.rv != null) {
    res.schedaOA.rv = req.body.rv
  }
  if (req.body.lc != null) {
    res.schedaOA.lc = req.body.lc
  }
  if (req.body.og != null) {
    res.schedaOA.og = req.body.og
  }
  if (req.body.cd != null) {
    res.schedaOA.cd = req.body.cd
  }
  if (req.body.ub != null) {
    res.schedaOA.ub = req.body.ub
  }
  try {
    const updatedschedaOA = await res.schedaOA.save()
    res.json(updatedschedaOA)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = routerOA