class Player {
  constructor(playerInfo) {
    this.name = playerInfo.name;
    this.position = playerInfo.position;
    this.goals = 0;
  }

  score() {
    this.goals++;
  }
}

module.exports = Player;
