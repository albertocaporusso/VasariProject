const express = require('express')
const router2 = express.Router()
const SchedaGpm = require('../models/schedaGpm')

async function getSchedaGpm(req, res, next) {
    let schedaGpm
    try {
      schedaGpm = await SchedaGpm.findById(req.params.id)
      if (schedaGpm == null) {
        return res.status(404).json({ message: 'Cannot find scheda' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.schedaGpm = schedaGpm
    next()
}

router2.post('/', async (req, res) => {
  //#swagger.tags = ['Schede Gpm']
  //#swagger.description = ''
  //#swagger.path = '/schedeGpm'
    const schedaGpm = new SchedaGpm({
      //campo = req.body.campo
      abstract : req.body.abstract,
      pi : req.body.pi,
      cb : req.body.cb,
      geolocation : req.body.geolocation,
      access_group : req.body.access_group
    })
    try {
      const newSchedaGpm = await schedaGpm.save()
      res.status(201).json(newSchedaGpm)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
})

router2.get('/abstract/:abstract', async (req,res)=>{
  //#swagger.tags = ['Schede Gpm']
  //#swagger.description = ''
  //#swagger.path = '/schedeGpm/abstract/{abstract}'
  try{
    const schedeGpm = await SchedaGpm.find({'abstract.value':{$regex : req.params.abstract}})
    res.json(schedeGpm)
  }catch (err){
    res.status(500).json({message : err.message})
  }
})

router2.get('/', async (req,res) =>{
  //#swagger.tags = ['Schede Gpm']
  //#swagger.description = ''
  //#swagger.path = '/schedeGpm'
  try{
      const schedeGpm = await SchedaGpm.find()
      res.json(schedeGpm)
  }catch (err){
      res.status(500).json({message : err.message})
  }
})

router2.get('/:id', getSchedaGpm, (req, res) => {
  //#swagger.tags = ['Schede Gpm']
  //#swagger.description = ''
  //#swagger.path = '/schedeGpm/{id}'
    res.json(res.schedaGpm) 
})

router2.patch('/:id', getSchedaGpm, async (req, res) => {
  //#swagger.tags = ['Schede Gpm']
  //#swagger.description = ''
  //#swagger.path = '/schedeGpm/{id}'
  if (req.body.pi != null) {
    res.schedaGpm.pi = req.body.pi
  }
  if (req.body.cb != null) {
    res.schedaGpm.cb = req.body.cb
  }
  try {
    const updatedSchedaGpm = await res.schedaGpm.save()
    res.json(updatedSchedaGpm)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router2.delete('/:id', getSchedaGpm, async (req, res) => {
   //#swagger.tags = ['Schede Gpm']
   //#swagger.description = ''
   //#swagger.path = '/schedeGpm/{id}'
    try {
      await res.schedaGpm.remove()
      res.json({ message: 'Deleted Scheda' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
})

module.exports = router2
