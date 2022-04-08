import Cup from "./Cup";
import Dice from "./Dice";
import Player from "./Player";

export default class Game {
    nbTurn!:number;
    _cup!:Cup;

    /**
     * 
     * Function to create a game
     * @param players 
     */
    initializeGame(nbPlayer:number) {
        this.nbTurn = nbPlayer + 1;
    }

    /**
     * Launch the game to begin turns
     */
    launchGame() {
        console.log("Game is launched !");
    }

    /**
     * Each turn is played
     */
    turnPlayed(_player:Player, cup:Cup, _dice:Dice) {
        _player.play(cup, _dice);
    }


    /**
     * Show the winner of each games
     */
    showWinner() {
        console.log("Winner is shown !")
    }
}