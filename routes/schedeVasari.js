const express = require('express')
const router = express.Router()
const SchedaVasari = require('../models/schedaVasari')

//DEFINISCO OPERAZIONI CRUD SU DB

//Definisco una funzione che ci sarà utile nelle successive operazioni. Essa restituisce la scheda inserendo l'id
async function getScheda(req, res, next) {
    let schedaVasari
    try {
      schedaVasari = await SchedaVasari.findById(req.params.id)
      if (schedaVasari == null) {
        return res.status(404).json({ message: 'Cannot find scheda' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.schedaVasari = schedaVasari
    next()
}

//Getting all
router.get('/', async (req,res) =>{
    try{
        const schedeVasari = await SchedaVasari.find()
        res.json(schedeVasari)
    }catch (err){
        res.status(500).json({message : err.message})
    }
})

// Getting One by ID
router.get('/:id', getScheda, (req, res) => {
    res.json(res.schedaVasari) 
})

// Updating One
router.patch('/:id', getScheda, async (req, res) => {
  if (req.body.cb != null) {
    res.schedaVasari.cb = req.body.cb
  }
  if (req.body.cx != null) {
    res.schedaVasari.cx = req.body.cx
  }
  if (req.body.sa != null) {
    res.schedaVasari.sa = req.body.sa
  }
  if (req.body.cx != null) {
    res.schedaVasari.pi = req.body.pi
  }
  try {
    const updatedSchedaVasari = await res.schedaVasari.save()
    res.json(updatedSchedaVasari)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Creating one
router.post('/', async (req, res) => {
    const schedaVasari = new SchedaVasari({
      //campo = req.body.campo
      cb : req.body.cb,
      cx : req.body.cx,
      sa : req.body.sa,
      pi : req.body.pi
    })
    try {
      const newSchedaVasari = await schedaVasari.save()
      res.status(201).json(newSchedaVasari)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
})

  
// Deleting by Id
router.delete('/:id', getScheda, async (req, res) => {
    try {
      await res.schedaVasari.remove()
      res.json({ message: 'Deleted Scheda' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
})


module.exports = router