const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String },
  region: { type: String },
  langugae: {type: String},
  genre: [{ type: String}],
  year: { type: Date },
  actors: [{
    type : mongoose.Schema.ObjectId,
    ref : 'Crew'
  }],
  directors: [{
    type : mongoose.Schema.ObjectId,
    ref : 'Crew'
  }],
  producers: [{
    type : mongoose.Schema.ObjectId,
    ref : 'Crew'
  }],
  createdat: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Movie', schema);
