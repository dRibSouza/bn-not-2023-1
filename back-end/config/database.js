const mongoose = require('mongoose')

/*
    Usa desestruturalçai para obter as variáveis de ambiente necessárias para realizar a conexão ao banco de dados
*/
const{
    MONGODB_USER,
    MONGODB_PASS,
    MONGODB_SERVER,
    MONGODB_DATABASE
} = process.env

module.exports = function() {
        // Conecta ao banco de dados
        mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_SERVER}/${MONGODB_DATABASE}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        mongoose.connection.on('connected', () => console.log('=> MONGOOSE!  Conectado com sucesso ao servidor'))

        mongoose.connection.on('disconnected', () => console.log('=> MONGOOSE!  Desconectado com sucesso ao servidor'))

        mongoose.connection.on('error', error =>
        console.error('*** MONGOOSE! ERRO ao se conectar ao servidor: ' + error))

        // Quando for detectado o comando de interrupção Ctrl+c
        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
            console.log('=> MONGOOSE! desconectando...')
            // Encerra a aplicação sem erros
            mongoose.connection.close()
            process.exit(0)
        })
    })
}