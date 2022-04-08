import Dice from "./Dice";

export default class Cup {
    public value!:number;

    /**
     * Throw all dices of players
     */
    throw(dice:Dice) {
        dice.throw();
        console.log("The content of cup is thrown !");
        this.value = dice.value;
    }

    /**
     * Show total score of cup
     */
    showScore() {
        console.log("Total score of cup is here !");
    }
}