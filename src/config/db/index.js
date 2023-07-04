const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/hoc_f8_dev')
}

connect().catch(err => console.log(err));
module.exports = { connect }