/*
=============== REFERENCE ONLY=================
*/

// const { Schema, Types } = require('mongoose');
// const dateFormat = require('./utils/date-format');

// const ReactionSchema = new Schema(
//     {
//         reactionId: {
//             type: Schema.Types.ObjectId,
//             default: () => new Types.ObjectId()
//         },
//         reactionBody: {
//             type: String,
//             required: true,
//             maxlength: 280
//         },
//         username: {
//             type: String,
//             required: true
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//             get: timeStamp => dateFormat(Timestamp),
//         }
//     },
//     {
//         toJSON: {
//             getters: true
//         },
//         id: false
//     }
// );