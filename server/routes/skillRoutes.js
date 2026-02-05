const express = require('express');
const router = express.Router();
const { getSkills, createSkill, deleteSkill } = require('../controllers/skillController');

// Public route to view skills
router.get('/', getSkills);

// Private routes to manage skills (Add auth middleware later)
router.post('/', createSkill);
router.delete('/:id', deleteSkill);

module.exports = router;
