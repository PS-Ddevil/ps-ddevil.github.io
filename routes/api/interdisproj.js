const express = require('express');
const router = express.Router();

//Item Model
const InterDisProjects = require('../../models/InterDisProjects');

// @route GET api/interdisproj
// @desc Get All interdisproj
// @access Public
router.get('/', (req, res) => {
    InterDisProjects.find()
        .sort({priority: 1})
        .then(interdisproj => res.json(interdisproj));
});

// @route POST api/interdisproj
// @desc Create interdisproj
// @access Public
router.post('/', (req, res) => {
    const newInterDisProj = new InterDisProjects({
        project_name: req.body.project_name,
        weblink: req.body.weblink,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        priority: req.body.priority,
        content: req.body.content,
        status: req.body.status
    });
    newInterDisProj.save().then(interdisproj => res.json(interdisproj));
});

// @route Delete api/interdisproj
// @desc  Delete a interdisproj
// @access Public
router.delete('/:id', (req, res) => {
    InterDisProjects.findById(req.params.id)
        .then(interdisproj => interdisproj.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;