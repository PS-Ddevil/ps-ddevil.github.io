const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const InterDisProjectSchema = new Schema({
    project_name: {
        type: String,
        required: true
    },
    weblink: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = WebProjects = mongoose.model('interdisprojects', InterDisProjectSchema);