import Cup from "./Cup";
import Dice from "./Dice";

export default class Player {
    // Each player have a name and a score
    public name:string;
    public score!:number;

    _cup!:Cup;
    _dice!:Dice;

    constructor(_name:string) {
        this.name = _name;
    }

    /**
     * 
     * Allow players to play during the game
     * @param cup 
     */
    play(cup:Cup, dicePlayer:Dice) {
        this._cup = cup;
        this._dice = dicePlayer;
        this._cup.throw(this._dice);
        this.showScore();
    }

    /**
     * Show score of players
     */
    showScore() {
        console.log(`Score is ${this._dice.value}`);
        
    }
}