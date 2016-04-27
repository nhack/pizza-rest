'use strict';

var express = require('express');
var controller = require('./pizza.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.put('/addReview/:id',controller.addReview);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
