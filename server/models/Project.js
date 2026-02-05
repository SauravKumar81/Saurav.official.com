const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String }],
    projectUrl: { type: String },
    githubUrl: { type: String },
    images: [{ type: String }], // Array of image URLs
    category: { type: String, default: 'Web Development' },
    featured: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);
