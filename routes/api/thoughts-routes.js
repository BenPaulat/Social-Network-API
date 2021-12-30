const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
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

// POST and DELETE for /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction);

module.exports = router;