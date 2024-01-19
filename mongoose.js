require('dotenv').config();
const mongoose = require('mongoose');

async function connectLocalDB(){
    //connection a la bd mongodb par mongoose
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('la base de donnee locale est connectée!!!');
    console.log('vous pouvez effectuer vos requettes sans problemes!!...');
}

module.exports = {connectLocalDB};