'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  icon: String,
  active: Boolean
});

module.exports = mongoose.model('Category', CategorySchema);
