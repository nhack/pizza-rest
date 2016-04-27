/**
 * Created by marius on 20/05/15.
 */

'use strict';

var Category = require('../api/category/category.model');


Category.count({}, function (err, count) {
  if (count == 0) {
    Category.create({
      name: 'Vegi',
      icon: 'fa-leaf'
    }, {
      name: 'Meat',
      icon: 'fa-paw'
    });
  }
});
