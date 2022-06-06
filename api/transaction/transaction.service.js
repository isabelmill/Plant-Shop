const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')

async function query() {
    try {
        const collection = await dbService.getCollection('transaction')
        let transactions = await collection.find().toArray()
        return transactions
    } catch (err) {
        logger.error('cannot find transactions', err)
        throw err
    }
}

async function add(transaction) {
    try {
        const collection = await dbService.getCollection('transaction')
        const addedTransaction = await collection.insertOne(transaction)
        transaction._id = addedTransaction.insertedId
        return transaction
    } catch (err) {
        logger.error('cannot insert transaction', err)
        throw err
    }
}

module.exports = {
    query,
    add,
}

