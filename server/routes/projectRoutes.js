const express = require('express');
const router = express.Router();
const { getProjects, getProjectById, createProject, updateProject, deleteProject } = require('../controllers/projectController');
const auth = require('../middleware/auth');

// Public routes
router.get('/', getProjects);
router.get('/:id', getProjectById);


const { upload } = require('../config/cloudinary');

// Protected routes (Add auth middleware later)
router.post('/', upload.single('image'), createProject);
router.put('/:id', upload.single('image'), updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
