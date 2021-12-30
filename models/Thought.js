const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // length required to be 1-280 characters - refer to mongoose docs
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get:createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    }
);