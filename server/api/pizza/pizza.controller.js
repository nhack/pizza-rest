'use strict';

var _ = require('lodash');
var Pizza = require('./pizza.model');

// Get list of pizzas
exports.index = function (req, res) {
  Pizza.find(function (err, pizzas) {
    if (err) { return handleError(res, err); }
    return res.json(200, pizzas);
  });
};

// Get a single pizza
exports.show = function (req, res) {
  Pizza.findById(req.params.id).populate('category').exec(function (err, pizza) {
    if (err) { return handleError(res, err); }
    if (!pizza) { return res.send(404); }
    return res.json(pizza);
  });
};

// Creates a new pizza in the DB.
exports.create = function (req, res) {
  Pizza.create(req.body, function (err, pizza) {
    if (err) { return handleError(res, err); }
    return res.json(201, pizza);
  });
};

// Updates an existing pizza in the DB.
exports.update = function (req, res) {
  if (req.body._id) { delete req.body._id; }
  Pizza.findById(req.params.id, function (err, pizza) {
    if (err) { return handleError(res, err); }
    if (!pizza) { return res.send(404); }
    var updated = _.merge(pizza, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, pizza);
    });
  });
};

exports.addReview = function (req, res) {
  Pizza.findByIdAndUpdate(req.params.id,
    {$push: {"reviews": req.body}},
    function (err, pizza) {
      if (err) { return handleError(res, err); }
      if (!pizza) { return res.send(404); }
      return res.json(200, pizza);
    });
};

// Deletes a pizza from the DB.
exports.destroy = function (req, res) {
  Pizza.findById(req.params.id, function (err, pizza) {
    if (err) { return handleError(res, err); }
    if (!pizza) { return res.send(404); }
    pizza.remove(function (err) {
      if (err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
