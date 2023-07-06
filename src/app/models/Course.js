const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    // imageThumb: { type: String, default: "no image" },
    category: String,
    slug: { type: String },
    describe: String,
    videoId: { type: String, require: true }
}, {
    timestamps: true
})


module.exports = mongoose.model('Course', courseSchema);