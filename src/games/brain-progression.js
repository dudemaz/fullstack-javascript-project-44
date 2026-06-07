import readlineSync from 'readline-sync';
import crypto from 'crypto';
import {greetUser} from '../cli.js'

function loadDigits(){
    const digits = []
    let start = crypto.randomInt(0,100)
    let step = crypto.randomInt(0,9)
    for(let i = 0; i < 10;i++){
    let currentElement = start + i * step
    digits.push(currentElement)
    
    }
    return digits
}
loadDigits()
export function progressionGame(){
    const nameUser = greetUser()
    console.log(`What number is missing in the progression?`)
    for(let i = 0; i < 3; i++ ){
        let random = crypto.randomInt(0,9)
        let progression = loadDigits()
        let CorrectAnswer = progression[random]
        progression[random] = '..'
        console.log(`Question: ${progression}`)
        const answerUser = Number(readlineSync.question(`Your answer: `))
        if(answerUser !== CorrectAnswer){
            console.log(`${answerUser} is wrong answer ;(. Correct answer was ${CorrectAnswer}.`)
            console.log(`Let's try again, ${nameUser}`)
            return
        }
        console.log(`Correct!`)
    }
    console.log(`Congratulations, ${nameUser}`)
}