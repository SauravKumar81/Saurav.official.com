const express = require('express');
const router = express.Router();
const { getProjects, getProjectById, createProject, updateProject, deleteProject } = require('../controllers/projectController');
const auth = require('../middleware/auth');

// Public routes
router.get('/', getProjects);
router.get('/:id', getProjectById);


const { upload } = require('../config/cloudinary');

// Protected routes (Add auth middleware later)
// Protected routes (Add auth middleware later)
const uploadMiddleware = (req, res, next) => {
    upload.single('image')(req, res, (err) => {
        if (err) {
            console.error('Cloudinary Upload Error:', err);
            return res.status(400).json({ msg: 'Image upload failed', error: err.message });
        }
        next();
    });
};

router.post('/', uploadMiddleware, createProject);
router.put('/:id', uploadMiddleware, updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
