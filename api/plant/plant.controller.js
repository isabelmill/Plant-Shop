const plantService = require('./plant.service.js');
const logger = require('../../services/logger.service')

// // GET LIST
async function getPlants(req, res) {
    try {
        var queryParams = req.query;
        const plants = await plantService.query(queryParams)
        res.json(plants);
    } catch (err) {
        logger.error('Failed to get plants', err)
        res.status(500).send({
            err: 'Failed to get plants'
        })
    }
}

// // POST (add plant)
async function addPlant(req, res) {
    try {
        const plant = req.body;
        const addedPlant = await plantService.add(plant)
        res.json(addedPlant)
    } catch (err) {
        logger.error('Failed to add plant', err)
        res.status(500).send({
            err: 'Failed to add plant'
        })
    }
}

// // PUT (Update plant)
async function updatePlant(req, res) {
    try {
        const plant = req.body;
        const updatedPlant = await plantService.update(plant)
        res.json(updatedPlant)
    } catch (err) {
        logger.error('Failed to update plant', err)
        res.status(500).send({
            err: 'Failed to update plant'
        })
    }
}

// DELETE (Remove plant)
async function removePlant(req, res) {
    try {
        const plantId = req.params._id;
        const removedId = await plantService.remove(plantId)
        res.send(removedId)
    } catch (err) {
        logger.error('Failed to remove plant', err)
        res.status(500).send({
            err: 'Failed to remove plant'
        })
    }
}

module.exports = {
    getPlants,
    addPlant,
    updatePlant,
    removePlant
}