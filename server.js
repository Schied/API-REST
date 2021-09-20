const database = require('./src/config/database');
const utils = require('./src/config/utils');
const app = require('./src/app');

database.connect();

app.listen(utils.PORT, (error)=>{
    if (error) throw error;
    console.log('Servidor corriendo');
});