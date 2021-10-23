const SnakeGame = require("snakecord");

module.exports = {
  commands: ["snakegame", "snake"],
  run: async (message, args, text, client) => {
    const snakeGame = new SnakeGame({
      title: "Snake Game",
      color: "BLUE",
      timestamp: true,
      gameOverTitle: "<a:GameOver:823784027713699841> Game Over",
    });

    return snakeGame.newGame(message);
  },
};
