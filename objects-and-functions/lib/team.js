class Team {
  constructor(country) {
    this.country = country;
    this.eliminated = false;
    this.players = [];
  }

  eliminate() {
    this.eliminated = true;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  playersByPosition(position) {
    var playersInPosition = [];
    var players = this.players;

    for (var i = 0; i < players.length; i++) {
      if (players[i].position === position) {
        playersInPosition.push(players[i]);
      }
    }

    return playersInPosition;
  }

}

module.exports = Team;
