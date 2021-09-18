const mongoose = require('mongoose');
const utils = require('./utils');

module.exports = {
    connection: null,
    connect: ()=>{
        if(this.connection) return this.connection
        return mongoose.connect(utils.DB).then(connection => {
            this.connection = connection;
            console.log('Conexion establecidad');
        }).catch(e => console.log(e));
    }
}