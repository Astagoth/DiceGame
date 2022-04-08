import Cup from "./Classes/Cup";
import Dice from "./Classes/Dice";
import Game from "./Classes/Game";
import Player from "./Classes/Player";

// All players are set for the game
const player1 = new Player("Jean");
const player2 = new Player("Marie");
const player3 = new Player("Ethienne");

// Give each player a cup
const cupP1 = new Cup();
const cupP2 = new Cup();
const cupP3 = new Cup();

// And give each player a dice
const diceP1 = new Dice();
const diceP2 = new Dice();
const diceP3 = new Dice();

// Create the game
const game = new Game();
game.initializeGame(3);
game.launchGame();

console.log("\n\n\t\tIt's the turn of player 1");
game.turnPlayed(player1, cupP1, diceP1);
console.log("\n\n\t\tNow is the turn of player 2");
game.turnPlayed(player2, cupP2, diceP2);
console.log("\n\n\t\tNow is the turn of player 3");
game.turnPlayed(player3, cupP3, diceP3);
