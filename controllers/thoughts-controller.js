const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .sort({ createdAt: -1 })
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },
    // get one thought by id

    // addReaction functions here - find thoughts and add reaction
}