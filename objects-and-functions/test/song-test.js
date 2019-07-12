var assert = require('chai').assert;

describe('Song', function() {

  it('should have a title, artist, year recorded, and length', function() {
    var higherLove = new Song("Higher Love", "Whitney + Kygo", 2019, "3:48");

    assert.equal(higherLove.title, "Higher Love");
    assert.equal(higherLove.artist, "Whitney + Kygo");
    assert.equal(higherLove.yearRecorded, 2019);
    assert.equal(higherLove.songLength, "3:48");
  });

  it('should have the ability to be favorited', function() {
    var higherLove = new Song("Higher Love", "Whitney + Kygo", 2019, "3:48");

    assert.equal(higherLove.favorited, false);

    higherLove.toggleFavorite();

    assert.equal(higherLove.favorited, true);
  });

  it('should have the ability to be un -favorited', function() {
    var higherLove = new Song("Higher Love", "Whitney + Kygo", 2019, "3:48");

    assert.equal(higherLove.favorited, false);

    higherLove.toggleFavorite();

    assert.equal(higherLove.favorited, true);

    higherLove.toggleFavorite();

    assert.equal(higherLove.favorited, false);
  });

});
