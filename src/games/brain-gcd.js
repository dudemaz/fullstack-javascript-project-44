import readlineSync from 'readline-sync';
import crypto from 'crypto';
import {greetUser} from '../cli.js'

function findGcd(a,b){
    while(b !== 0){
        let temp = b 
        b = a % b
        a = temp
    }
    return a
}
export function gameStart(){
    let nameUser = greetUser()
    console.log(`Find the greatest common divisor of given numbers.`)
    for(let i = 0 ; i<3; i++){
        let firstRandomNum = crypto.randomInt(0,100)
        let secondRandomNumbrr = crypto.randomInt(0,100)
        console.log(`Question: ${firstRandomNum} ${secondRandomNumbrr}`)
        const answerUser = Number(readlineSync.question(`Your answer: `))
        const CorrectAnswer = findGcd(firstRandomNum,secondRandomNumbrr)
        if(answerUser !== CorrectAnswer){
            console.log(`${answerUser} is wrong answer ;(. Correct answer was ${CorrectAnswer}.`)
            console.log(`Let's try again, ${nameUser}`)
            return
        }
        console.log(`Correct!`)
    }
    console.log(`Congratulations, ${nameUser}`)
}