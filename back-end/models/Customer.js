const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true // campo obrigatótio
    },
    phone: {
        type: String,
        required: false
    },
    id_document: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    // subdocumento incorporado
    address : {
        street:{
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        complement: {
            type: String,
            required: false
        },
        district: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip_code: {
            type: String,
            required: true
        }
    }
})
/**
 * Parâmetros de mongoose.model:
 * 1º: nome da model, para usi interno (convenção: primeira letra maiúscula e singular)
 * 2º: relação de campos do esquema (constante schema)
 * 3º: nome da collection no banco de dados (convenção: mesmo nome do model, mas com a letra minúscula e no plural)
 */

module.exports = mongoose.model('Customer', schema, 'customers')