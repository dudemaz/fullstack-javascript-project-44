import readlineSync from 'readline-sync';
import crypto from 'crypto';
import {greetUser} from '../cli.js'

export function CalcGame(){
    let nameUser = greetUser()
    console.log(`What is the result of the expression?`)
    for(let i = 0; i < 3; i++){
        let randomNumber = crypto.randomInt(0,100)
        let RandomOperand =  crypto.randomInt(0,3) 
        let numFirst = randomNumber
        let numSecond = randomNumber
        let correctAnswer;
        let operator;
        switch (RandomOperand) {
            case 0:
                operator = '+';
                correctAnswer = numFirst + numSecond;
                break;
            case 1:
                operator = '-';
                correctAnswer = numFirst - numSecond;
                break;
            case 2:
                operator = '*';
                correctAnswer = numFirst * numSecond;
                break;
        } 
        console.log(`Question: ${numFirst} ${operator} ${numSecond}`)
        const answerUser = Number(readlineSync.question(`Your answer: `))

        if(answerUser !== correctAnswer){
            return console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
        }
        console.log(`Correct!`)
    }
    console.log(`Congratulations, ${nameUser}`)
}