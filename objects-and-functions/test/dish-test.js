var assert = require('chai').assert;
var Dish = require('../lib/dish');

describe('Dish', function() {

  it('should be a function', function() {
    assert.isFunction(Dish);
  });

  it('should have a name', function() {
    var dish1 = new Dish("Pineapple Salsa", "appetizer", 6);
    assert.equal(dish1.name, "Pineapple Salsa");
  });

  it('should have a category', function() {
    var dish1 = new Dish("Pineapple Salsa", "appetizer", 6);
    assert.equal(dish1.category, "appetizer");
  });

  it('should have a number of servings', function() {
    var dish1 = new Dish("Pineapple Salsa", "appetizer", 6);
    assert.equal(dish1.numberOfServings, 6);
  });

});
