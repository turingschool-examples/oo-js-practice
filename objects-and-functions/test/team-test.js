var assert = require('chai').assert;
var Team = require('../lib/team');
var Player = require('../lib/player');

describe('Team', function() {

  it('should be a function', function() {
    assert.isFunction(Team);
  });

  it('should have a country name', function() {
    var netherlands = new Team("Netherlands");
    assert.equal(netherlands.country, "Netherlands");
  });

  it('should not be eliminated by default', function() {
    var netherlands = new Team("Netherlands");
    assert.equal(netherlands.eliminated, false);
  });

  it('should be able to get eliminated', function() {
    var netherlands = new Team("Netherlands");

    netherlands.eliminate();

    assert.equal(netherlands.eliminated, true);
  });

  it('should start with no players', function() {
    var netherlands = new Team("Netherlands");
    assert.deepEqual(netherlands.players, []);
  });

  it('should be able to add players', function() {
    var rapinoe = new Player({name: "Megan Rapinoe", position: "forward"});
    var dunn = new Player({name: "Crystal Dunn", position: "defender"});
    var usa = new Team("USA");

    usa.addPlayer(rapinoe);
    usa.addPlayer(dunn);

    assert.deepEqual(usa.players, [rapinoe, dunn]);
  });

  it('should be able to find players by position', function() {
    var rapinoe = new Player({name: "Megan Rapinoe", position: "forward"});
    var dunn = new Player({name: "Crystal Dunn", position: "defender"});
    var usa = new Team("USA");

    usa.addPlayer(rapinoe);
    usa.addPlayer(dunn);

    assert.deepEqual(usa.playersByPosition("forward"), [rapinoe]);
  });

});
