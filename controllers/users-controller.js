// normal CRUD + addFriend/RemoveFriend

const { User } = require('../models');

const userController = {

    // get all users
    getAllUsers(req, res) {
        User.find({})
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
    },

    // create user
    createUser({ body }, res) {
        User.create(body)
    },

    // update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id}, body, { new: true })
    },

    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
    },

    // add friend
    addFriend({ params, body }, res) {
        User.findByIdAndUpdate(
            { _id: params.userId },
            { $push: { friends: body } },
            { new: true }
        )
    },

    // remove friend
    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: { friendId: params.friendId } } },
            { new: true }
        )
    }
};

module.exports = userController;