const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }
        res.json(project);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Project not found' });
        }
        res.status(500).send('Server Error');
    }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private
exports.createProject = async (req, res) => {
    try {
        const projectData = req.body;
        console.log('Create Project Body:', projectData);
        console.log('Create Project File:', req.file);
        
        // Handle capabilities passed as string (multipart/form-data)
        if (typeof projectData.technologies === 'string') {
            projectData.technologies = projectData.technologies.split(',').map(t => t.trim());
        }

        // Handle Cloudinary Image Upload
        if (req.file) {
            projectData.image = req.file.path;
            projectData.images = [req.file.path];
        }

        const newProject = new Project(projectData);
        const project = await newProject.save();
        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private
exports.updateProject = async (req, res) => {
    try {
        let project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        const updateData = req.body;

        // Handle capabilities passed as string (multipart/form-data)
        if (typeof updateData.technologies === 'string') {
            updateData.technologies = updateData.technologies.split(',').map(t => t.trim());
        }

        // Handle Image Upload Update
        if (req.file) {
            updateData.image = req.file.path;
            updateData.images = [req.file.path];
        }

        project = await Project.findByIdAndUpdate(req.params.id, { $set: updateData }, { new: true });
        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        await project.deleteOne();
        res.json({ msg: 'Project removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
