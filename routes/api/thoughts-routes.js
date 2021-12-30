const router = require('express').Router();
const {
    getThoughts,
    // remaining functions vv
} = require('../../controllers/thoughts-controller');

// set up all Get and Post /api/thoughts
router.route('/').get(getThoughts).post();

//set up all get and post by :id /:thoughtsId
