const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    imageThumb: { type: String, default: "no image" },
    date: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
})


module.exports = mongoose.model('Course', courseSchema);