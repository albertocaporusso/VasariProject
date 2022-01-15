const express = require('express')
const routerRA = express.Router()
const SchedaRA = require('../models/schedaRA')

async function getSchedaRA(req, res, next) {
    let schedaRA
    try {
      schedaRA = await SchedaRA.findById(req.params.id)
      if (schedaRA == null) {
        return res.status(404).json({ message: 'Cannot find scheda' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.schedaRA = schedaRA 
    next()
}

routerRA.get('/', async (req,res) =>{
  //#swagger.tags = ['Schede RA']
  //#swagger.description = ''
  //#swagger.path = '/schedeRA'
  try{
    const schedeRA = await SchedaRA.find()
    res.json(schedeRA)
  }catch (err){
    res.status(500).json({message : err.message})
  }
})

routerRA.get('/ogtn/:ogtn', async (req,res)=>{
  //#swagger.tags = ['Schede RA']
  //#swagger.description = ''
  //#swagger.path = '/schedeRA/ogtn/{ogtn}'
  try{
    const schedeRA = await SchedaRA.find({'og.ogt.ogtn.value':{$regex : req.params.ogtn}})
    res.json(schedeRA)
  }catch (err){
    res.status(500).json({message : err.message})
  }
})

routerRA.post('/', async (req, res) => {
  //#swagger.tags = ['Schede RA']
  //#swagger.description = ''
  //#swagger.path = '/schedeRA'
    const schedaRA = new SchedaRA({
        //campo : req.body.campo
        mt : req.body.mt,
        co : req.body.co,
        cm : req.body.cm,
        rs : req.body.rs,
        au : req.body.au,
        rv : req.body.rv,
        lc : req.body.lc,
        og : req.body.og,
        cd : req.body.cd,
        ub : req.body.ub,
        dt : req.body.dt
    })
    try {
      const newSchedaRA = await schedaRA.save()
      res.status(201).json(newSchedaRA)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
})

routerRA.delete('/:id', getSchedaRA, async (req, res) => {
  //#swagger.tags = ['Schede RA']
  //#swagger.description = ''
  //#swagger.path = '/schedeRA/{id}'
    try {
      await res.schedaRA.remove()
      res.json({ message: 'Deleted Scheda' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
})

routerRA.get('/:id', getSchedaRA, (req, res) => {
  //#swagger.tags = ['Schede RA']
  //#swagger.description = ''
  //#swagger.path = '/schedeRA/{id}'
    res.json(res.schedaRA) 
})

routerRA.patch('/:id', getSchedaRA, async (req, res) => {
  //#swagger.tags = ['Schede RA']
  //#swagger.description = ''
  //#swagger.path = '/schedeRA/{id}'
  if (req.body.mt != null) {
    res.schedaRA.mt = req.body.mt
  }
  if (req.body.co != null) {
    res.schedaRA.co = req.body.co
  }
  if (req.body.cm != null) {
    res.schedaRA.cm = req.body.cm
  }
  if (req.body.rs != null) {
    res.schedaRA.rs = req.body.rs
  }
  if (req.body.au != null) {
    res.schedaRA.au = req.body.au
  }
  if (req.body.rv != null) {
    res.schedaRA.rv = req.body.rv
  }
  if (req.body.lc != null) {
    res.schedaRA.lc = req.body.lc
  }
  if (req.body.og != null) {
    res.schedaRA.og = req.body.og
  }
  if (req.body.cd != null) {
    res.schedaRA.cd = req.body.cd
  }
  if (req.body.ub != null) {
    res.schedaRA.ub = req.body.ub
  }
  if (req.body.dt != null) {
    res.schedaRA.dt = req.body.dt
  }
  try {
    const updatedSchedaRA = await res.schedaRA.save()
    res.json(updatedSchedaRA)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = routerRA