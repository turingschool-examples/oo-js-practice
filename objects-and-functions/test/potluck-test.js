var assert = require('chai').assert;
var Potluck = require('../lib/potluck');
var Dish = require('../lib/dish');

describe('Potluck', function() {

  it('should be a function', function() {
    assert.isFunction(Potluck);
  });

  it('should have a date', function() {
    var potluck1 = new Potluck("07-13-19");
    assert.equal(potluck1.date, "07-13-19");
  });

  it('should have no dishes to start with', function() {
    var potluck1 = new Potluck("07-13-19");
    assert.deepEqual(potluck1.dishes, []);
  });

  it('should be able to add dishes', function() {
    var dish1 = new Dish("Pineapple Salsa", "appetizer", 6);
    var dish2 = new Dish("Brownies", "dessert", 8);
    var dish3 = new Dish("Burgers", "main", 8);

    var potluck1 = new Potluck("07-13-19");

    potluck1.addDish(dish1);
    potluck1.addDish(dish2);
    potluck1.addDish(dish3);

    var expected = [dish1, dish2, dish3];

    assert.deepEqual(potluck1.dishes, expected);
  });

  it('should be able to get a dish by category', function() {
    var dish1 = new Dish("Pineapple Salsa", "appetizer", 6);
    var dish2 = new Dish("7 Layer Dip", "appetizer", 6);
    var dish3 = new Dish("Brownies", "dessert", 8);
    var dish4 = new Dish("Burgers", "main", 8);

    var potluck1 = new Potluck("07-13-19");

    potluck1.addDish(dish1);
    potluck1.addDish(dish2);
    potluck1.addDish(dish3);
    potluck1.addDish(dish4);

    assert.deepEqual(potluck1.dishesInCategory("appetizer"), [dish1, dish2]);
    assert.deepEqual(potluck1.dishesInCategory("dessert"), [dish3]);
    assert.deepEqual(potluck1.dishesInCategory("main"), [dish4]);
  });

});
