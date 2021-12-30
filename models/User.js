const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            // trimmed - refer to mongoose docs
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Validate matches email address format - refer to mongoose docs
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// virtual for friends list
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create User model
const User = model('User', UserSchema);

module.exports = User;