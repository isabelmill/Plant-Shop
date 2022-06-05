const express = require('express')

const {
    getPlants,
    addPlant,
    updatePlant,
    removePlant
} = require('./plant.controller')
const router = express.Router()


router.get('/', getPlants)
router.post('/', addPlant)
router.put('/:_id', updatePlant)
router.delete('/:_id', removePlant)

module.exports = router