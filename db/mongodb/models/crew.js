const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  dob: {type: Date},
  region: [{ type: String}],
  movies: [{
    type : mongoose.Schema.ObjectId,
    ref : 'Movie'
  }],
  createdat: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Crew', schema);
