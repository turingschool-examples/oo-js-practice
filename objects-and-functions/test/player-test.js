var assert = require('chai').assert;
var Player = require('../lib/player');

describe('Player', function() {

  it('should be a function', function() {
    assert.isFunction(Player);
  });

  it('should have a name', function() {
    var rapinoe = new Player({name: "Megan Rapinoe", position: "forward"});
    assert.equal(rapinoe.name, "Megan Rapinoe");
  });

  it('should have a position', function() {
    var rapinoe = new Player({name: "Megan Rapinoe", position: "forward"});
    assert.equal(rapinoe.position, "forward");
  });

  it('should start with no goals', function() {
    var rapinoe = new Player({name: "Megan Rapinoe", position: "forward"});
    assert.equal(rapinoe.goals, 0);
  });

  it('should be able to score goals', function() {
    var rapinoe = new Player({name: "Megan Rapinoe", position: "forward"});

    rapinoe.score();
    rapinoe.score();

    assert.equal(rapinoe.goals, 2);
  });

});
