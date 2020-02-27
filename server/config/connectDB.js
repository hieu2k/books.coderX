const mongoose = require('mongoose');
const configDefault = require('./default');

const mongoseUrl = configDefault.mongoseDB.mongoseURL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoseUrl,{
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex:true,
            useUnifiedTopology: true
        })
        console.log('MongoseDb connect....');
    } catch (err) {
        console.log('Error is: ', err);
    }
};

module.exports = connectDB;