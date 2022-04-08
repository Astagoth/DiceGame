export default class Dice {
    public value!:number;

    /**
     * Throw the dice to have a number between 1 and 6
     */
    public throw() {
        let minDice = Math.ceil(1);
        let maxDice = Math.floor(6);

        this.value = Math.floor(Math.random() * (maxDice - minDice) + minDice);
    }
}