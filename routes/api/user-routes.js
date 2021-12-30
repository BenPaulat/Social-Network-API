const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/users-controller');

// GET and POST router for /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// GET, PUT, and DELETE for /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;