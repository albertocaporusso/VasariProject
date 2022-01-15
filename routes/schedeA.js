const express = require('express')
const routerA = express.Router()
const SchedaA = require('../models/schedaA')

async function getSchedaA(req, res, next) {
 
    let schedaA
    try {
      schedaA = await SchedaA.findById(req.params.id)
      if (schedaA == null) {
        return res.status(404).json({ message: 'Cannot find scheda' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.schedaA = schedaA 
    next()
}

routerA.get('/', async (req,res) =>{
  //#swagger.tags = ['Schede A']
  //#swagger.description = ''
  //#swagger.path = '/schedeA'
    try{
      const schedeA = await SchedaA.find()
      res.json(schedeA)
    }catch (err){
      res.status(500).json({message : err.message})
    }
})

routerA.get('/ogtn/:ogtn', async (req,res)=>{
  //#swagger.tags = ['Schede A']
  //#swagger.description = 'Cerca nelle schede tramite campo ogtn'
  //#swagger.path = '/schedeA/ogtn/{ogtn}'
  try{
    const schedeA = await SchedaA.find({'og.ogt.ogtn.value':{$regex : req.params.ogtn}})
    res.json(schedeA)
  }catch (err){
    res.status(500).json({message : err.message})
  }
})

routerA.post('/', async (req, res) => {
  //#swagger.tags = ['Schede A']
  //#swagger.description = ''  
  //#swagger.path = '/schedeA'
  const schedaA = new SchedaA({
        //campo : req.body.campo
        rs : req.body.rs,
        cm : req.body.cm,
        au : req.body.au,
        rv : req.body.rv,
        lc : req.body.lc,
        og : req.body.og,
        cd : req.body.cd,
        li : req.body.li
    })
    try {
      const newSchedaA = await schedaA.save()
      res.status(201).json(newSchedaA)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
})

routerA.delete('/:id', getSchedaA, async (req, res) => {
    //#swagger.tags = ['Schede A']
    //#swagger.description = ''
    //#swagger.path = '/schedeA/{id}'
    try {
      await res.schedaA.remove()
      res.json({ message: 'Deleted Scheda' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
})

routerA.get('/:id', getSchedaA, (req, res) => {
    
    //#swagger.tags = ['Schede A']
    //#swagger.description = ''
    //#swagger.path = '/schedeA/{id}'
    res.json(res.schedaA) 
})

routerA.patch('/:id', getSchedaA, async (req, res) => {
  //#swagger.tags = ['Schede A']
  //#swagger.description = ''
  //#swagger.path = '/schedeA/{id}'
    if (req.body.rs != null) {
      res.schedaA.rs = req.body.rs
    }
    
    if (req.body.cm != null) {
      res.schedaA.cm = req.body.cm
    }
    
    if (req.body.au != null) {
      res.schedaA.au = req.body.au
    }
    if (req.body.rv != null) {
      res.schedaA.rv = req.body.rv
    }
    if (req.body.lc != null) {
      res.schedaA.lc = req.body.lc
    }
    if (req.body.og != null) {
      res.schedaA.og = req.body.og
    }
    if (req.body.cd != null) {
      res.schedaA.cd = req.body.cd
    }  
    if (req.body.li != null) {
      res.schedaA.li = req.body.li
    }
    try {
      const updatedSchedaA = await res.schedaA.save()
      res.json(updatedSchedaA)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
})
  
module.exports = routerA