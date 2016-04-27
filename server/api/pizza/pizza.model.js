'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PizzaSchema = new Schema({
  name: String,
  price: Number,
  weight: Number,
  ingredients: String,
  extras: String,
  image: String,
  images:[String],
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  reviews: [
    {
      stars: Number,
      body: String,
      author: String,
      createdOn: Date
    }
  ],
  active: Boolean
});

module.exports = mongoose.model('Pizza', PizzaSchema);
