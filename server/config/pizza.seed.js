/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Pizza = require('../api/pizza/pizza.model');

Pizza.find({}).remove(function() {
    Pizza.create({
      "name": "4 STAGIONI",
      "price": 27.5,
      "weight": 550,
      "ingredients": "sos rosii, mozzarella, ciuperci, salam, sunca presata, oregano, anghinare",
      "extras": "mozzarella",
      "image": "images/quattro.png",
      "images": [],
      "reviews": [{
        "stars": 5,
        "body": "I love this pizza!",
        "author": "joe@example.org",
        "createdOn": 1397490980837
      }, {
        "stars": 1,
        "body": "This pizza sucks.",
        "author": "tim@example.org",
        "createdOn": 1397490980837
      }]
    }, {
      "name": "PEPPERONI",
      "price": 25,
      "weight": 450,
      "ingredients": "sos rosii, mozzarella, salam picant, oregano",
      "extras": "chilly",
      "image": "images/pepperoni.png",
      "images": [],
      "reviews": [{
        "stars": 3,
        "body": "I think this pizza was just OK, could honestly be more spicy, IMO.",
        "author": "JimmyDean@example.org",
        "createdOn": 1397490980837
      }, {
        "stars": 4,
        "body": "Any pizza with chilly is for me!",
        "author": "gemsRock@example.org",
        "createdOn": 1397490980837
      }]
    }, {
      "name": "MARGARITA",
      "price": 17.5,
      "weight": 350,
      "ingredients": "sos rosii, mozzarella, oregano",
      "extras": "oregano",
      "image": "images/margarita.png",
      "images": [],
      "reviews": [{
        "stars": 1,
        "body": "This pizza is WAY too expensive for its value.",
        "author": "turtleguyy@example.org",
        "createdOn": 1397490980837
      }, {
        "stars": 1,
        "body": "BBW: Simple Pizza != High Quality.",
        "author": "LouisW407@example.org",
        "createdOn": 1397490980837
      }, {
        "stars": 1,
        "body": "Don't waste your $$$!",
        "author": "nat@example.org",
        "createdOn": 1397490980837
      }]
    });
});
