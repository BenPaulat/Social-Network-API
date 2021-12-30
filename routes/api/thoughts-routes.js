const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughts-controller');

// GET all thoughts and POST new thought for /api/thoughts/:userId
router
    .route('/:userId')
    .get(getThoughts)
    .post(createThought);

// GET, PUT, and DELETE for /api/thoughts/:userId/:thoughtId
router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;