const express = require('express');
const router = express.Router();

//Item Model
const WebProjects = require('../../models/WebProjects');

// @route GET api/webproj
// @desc Get All webproj
// @access Public
router.get('/', (req, res) => {
    WebProjects.find()
        .sort({prioity: 1})
        .then(webproj => res.json(webproj));
});

// @route POST api/webproj
// @desc Create webproj
// @access Public
router.post('/', (req, res) => {
    const newWebProj = new WebProjects({
        project_name: req.body.project_name,
        weblink: req.body.weblink,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        priority: req.body.priority,
        content: req.body.content,
        status: req.body.status
    });
    newWebProj.save().then(webproj => res.json(webproj));
});

// @route Delete api/webproj
// @desc  Delete a webproj
// @access Public
router.delete('/:id', (req, res) => {
    WebProjects.findById(req.params.id)
        .then(webproj => webproj.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;