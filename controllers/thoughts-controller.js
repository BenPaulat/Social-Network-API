const { Thought, User } = require('../models');

const thoughtController = {

    // get all thoughts
    getThoughts(req, res) {
        Thought.find({})
        .sort({ createdAt: -1 })
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // get one thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
    },

    // create thought
    createThought({ body }, res) {
        Thought.create(body)
    },

    // update thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true })
    },

    // delete thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
    },


    // addReaction functions here - find thoughts and add reaction
}