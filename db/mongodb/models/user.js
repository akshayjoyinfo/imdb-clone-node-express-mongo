const mongoose = require('../connection');

const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String },
    hash: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    email: {type: String },
    createdat: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);