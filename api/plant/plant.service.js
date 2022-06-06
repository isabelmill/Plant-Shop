const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

async function query() {
    try {
        const collection = await dbService.getCollection('plant')
        let plants = await collection.find().toArray()
        return plants
    } catch (err) {
        logger.error('cannot find plants', err)
        throw err
    }
}

async function remove(plantId) {
    try {
        const collection = await dbService.getCollection('plant')
        await collection.deleteOne({
            '_id': ObjectId(plantId)
        })
        return plantId
    } catch (err) {
        logger.error(`cannot remove plant ${plantId}`, err)
        throw err
    }
}

async function add(plant) {
    try {
        const collection = await dbService.getCollection('plant')
        const addedPlant = await collection.insertOne(plant)
        plant._id = addedPlant.insertedId
        return plant
    } catch (err) {
        logger.error('cannot insert plant', err)
        throw err
    }
}
async function update(plant) {
    try {
        var id = ObjectId(plant._id)
        delete plant._id
        const collection = await dbService.getCollection('plant')
        await collection.updateOne({"_id": id}, {
            $set: {
                ...plant
            }
        })
        plant._id = id
        return plant
    } catch (err) {
        logger.error(`cannot update plant ${plant._id}`, err)
        throw err
    }
}

module.exports = {
    remove,
    query,
    add,
    update,
}

