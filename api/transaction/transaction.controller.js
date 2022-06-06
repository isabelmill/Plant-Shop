const transactionService = require('./transaction.service.js');
const logger = require('../../services/logger.service')

// // GET LIST
async function getTransactions(req, res) {
    try {
        var queryParams = req.query;
        const transactions = await transactionService.query(queryParams)
        res.json(transactions);
    } catch (err) {
        logger.error('Failed to get transactions', err)
        res.status(500).send({
            err: 'Failed to get transactions'
        })
    }
}

// // POST (add transaction)
async function addTransaction(req, res) {
    try {
        const transaction = req.body;
        const addedTransaction = await transactionService.add(transaction)
        res.json(addedTransaction)
    } catch (err) {
        logger.error('Failed to add transaction', err)
        res.status(500).send({
            err: 'Failed to add transaction'
        })
    }
}



module.exports = {
    getTransactions,
    addTransaction
}