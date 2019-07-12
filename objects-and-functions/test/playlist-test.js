var assert = require('chai').assert;

describe('Playlist', function() {

  it('should have a name', function() {
    var summerHits = new Playlist("Summer Hits");

    assert.equal(summerHits.name, "Summer Hits");
  });

  it('should start empty', function() {
    var summerHits = new Playlist("Summer Hits");

    assert.deepEqual(summerHits.songs, []);
  });


  it('should be able to add songs', function() {
    var higherLove = new Song("Higher Love", "Whitney + Kygo", 2019, "3:48");
    var summerDays = new Song("Summer Days", "Martin Garrix + Macklemore + Fall Out Boy", 2019, "2:44");
    var outtaMyHead = new Song("Outta My Head", "Khalid + John Mayer", 2019, "2:57");
    var youNeedToCalmDown = new Song("You Need To Calm Down", "Taylor Swift", 2019, "2:51");
    var summerHits = new Playlist("Summer Hits");

    summerHits.addSong(higherLove);
    summerHits.addSong(summerDays);
    summerHits.addSong(outtaMyHead);
    summerHits.addSong(youNeedToCalmDown);

    assert.deepEqual(summerHits.songs, [higherLove, summerDays, outtaMyHead, youNeedToCalmDown]);
  });

  it('should be remove to add songs', function() {
    var higherLove = new Song("Higher Love", "Whitney + Kygo", 2019, "3:48");
    var summerDays = new Song("Summer Days", "Martin Garrix + Macklemore + Fall Out Boy", 2019, "2:44");
    var outtaMyHead = new Song("Outta My Head", "Khalid + John Mayer", 2019, "2:57");
    var youNeedToCalmDown = new Song("You Need To Calm Down", "Taylor Swift", 2019, "2:51");
    var summerHits = new Playlist("Summer Hits");

    summerHits.addSong(higherLove);
    summerHits.addSong(summerDays);
    summerHits.addSong(outtaMyHead);
    summerHits.addSong(youNeedToCalmDown);

    summerHits.removeSong(youNeedToCalmDown);

    assert.deepEqual(summerHits.songs, [higherLove, summerDays, outtaMyHead]);
  });

  it('should be able to list all favorited songs', function() {
    var higherLove = new Song("Higher Love", "Whitney + Kygo", 2019, "3:48");
    var summerDays = new Song("Summer Days", "Martin Garrix + Macklemore + Fall Out Boy", 2019, "2:44");
    var outtaMyHead = new Song("Outta My Head", "Khalid + John Mayer", 2019, "2:57");
    var youNeedToCalmDown = new Song("You Need To Calm Down", "Taylor Swift", 2019, "2:51");

    higherLove.toggleFavorite();
    outtaMyHead.toggleFavorite();

    var summerHits = new Playlist("Summer Hits");

    summerHits.addSong(higherLove);
    summerHits.addSong(summerDays);
    summerHits.addSong(outtaMyHead);
    summerHits.addSong(youNeedToCalmDown);

    assert.deepEqual(summerHits.favoritedSongs(), [higherLove, outtaMyHead]);
  });

  it('should know how long it takes to play all songs', function() {
    var higherLove = new Song("Higher Love", "Whitney + Kygo", 2019, "3:48");
    var outtaMyHead = new Song("Outta My Head", "Khalid + John Mayer", 2019, "2:57");
    var youNeedToCalmDown = new Song("You Need To Calm Down", "Taylor Swift", 2019, "2:51");
    var summerHits = new Playlist("Summer Hits");

    summerHits.addSong(higherLove);
    summerHits.addSong(outtaMyHead);
    summerHits.addSong(youNeedToCalmDown);

    assert.equal(summerHits.totalLength(), "9 minutes, 36 seconds");
  });

});
