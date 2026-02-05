const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Other'], required: true },
    proficiency: { type: Number, min: 1, max: 100 }, // Percentage
    icon: { type: String }, // Icon name or URL
    order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Skill', SkillSchema);
