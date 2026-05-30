
import readlineSync from 'readline-sync';
import {greetUser} from '../cli.js'

function isEven(num){
    return num % 2 === 0
}
export function gameIsEven(){
    const name = greetUser()
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
    for(let i = 0; i < 3; i++){
        const randomNumber = Math.floor(Math.random() * 100)
        const correctAnswer = isEven(randomNumber)? 'yes' : 'no'

        console.log(`Question: ${randomNumber}`)
        let answer = readlineSync.question(`Your answer:`)
        if(answer !== correctAnswer){
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
         console.log(`Let's try again, ${name}!`)
         return
        }
        console.log(`Correct!`)
    }
    console.log(`Congratulations,${name}`)
}