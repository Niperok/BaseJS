'use strict';

let renderer = {
    display: '',
    
    /**
     * Отображает игру в консоли.
     */
    render(questNumber) {
        this.display += questMassive[questNumber].question + '\n';
        this.display += 'A: ' + questMassive[questNumber].answerA + '\n';
        this.display += 'B: ' + questMassive[questNumber].answerB + '\n';
        this.display += 'C: ' + questMassive[questNumber].answerC + '\n';
        this.display += 'D: ' + questMassive[questNumber].answerD + '\n';
        console.log(this.display);
    },
    
    clear() {
        this.display = '';
    }
}