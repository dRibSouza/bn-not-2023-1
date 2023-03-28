// Importa do Model
const Customer = require('../models/Customer')

const controller = {} // Objeto vazio

controller.create = async (req,res) => {
    try {
        // Manda as informações que vieram em req.body para serem gravadas no banco de dados
        await Customer.create(req.body)

        //HTTP 201: Created
        res.status(201).end()
    }
    catch {
        console.error(error)
        // HTTP : Internal Server Error
        res.status(500).send(error)
    }
}

module.exports = controller