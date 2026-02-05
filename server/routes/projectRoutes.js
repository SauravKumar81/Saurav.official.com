const express = require('express');
const router = express.Router();
const { getProjects, getProjectById, createProject, updateProject, deleteProject } = require('../controllers/projectController');
const auth = require('../middleware/auth');

// Public routes
router.get('/', getProjects);
router.get('/:id', getProjectById);

// Protected routes (Add auth middleware later)
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
