const arr = ['🪨','📃','✂️']

// console.log(arr)

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')

const user =  document.querySelector('.user')
const machine = document.querySelector('.machine')

const outputResult = document.querySelector('.outputResult')

const userScore = document.querySelector('.userScore')
const computerScore = document.querySelector('.compScore')

// const points = []

let userCount = 0
let compCount = 0

// let score = {
//     user: userCount,
//     comp: compCount
// }

rock.addEventListener('click',function(){
    const random = arr[Math.floor(Math.random()*3)]
    const result = document.createElement("h1")
    user.innerText = '🪨'
    machine.innerText = random

    outputResult.innerHTML = ''
    if(random == "✂️"){
        result.innerText = "You Win 🤩"
        result.className = 'win'
        outputResult.append(result)
        userCount++
    }
    else if(random == "📃"){
        result.innerText = "You Lose 😔"
        result.className = 'lose'
        outputResult.append(result)
        compCount++
    }
    else{
        result.innerText = "Draw 😑"
        result.className = 'draw'
        outputResult.append(result)
    }
    displayScore(userCount, compCount)
})

paper.addEventListener('click',function(){
    const random = arr[Math.floor(Math.random()*3)]
    const result = document.createElement("h1")
    user.innerText = '📃'
    machine.innerText = random

    outputResult.innerHTML = ''
    if(random == "🪨"){
        result.innerText = "You Win 🤩"
        result.className = 'win'
        outputResult.append(result)
        userCount++
    }
    else if(random == "✂️"){
        result.innerText = "You Lose 😔"
        result.className = 'lose'
        outputResult.append(result)
        compCount++
    }
    else{
        result.innerText = "Draw 😑"
        result.className = 'draw'
        outputResult.append(result)
    }
    displayScore(userCount, compCount)
})


scissor.addEventListener('click',function(){
    const random = arr[Math.floor(Math.random()*3)]
    const result = document.createElement("h1")
    user.innerText = '✂️'
    machine.innerText = random

    outputResult.innerHTML = ''
    if(random == "📃"){
        result.innerText = "You Win 🤩"
        result.className = 'win'
        outputResult.append(result)
        userCount++
    }
    else if(random == "🪨"){
        result.innerText = "You Lose 😔"
        result.className = 'lose'
        outputResult.append(result)
        compCount++
    }
    else{
        result.innerText = "Draw 😑"
        result.className = 'draw'
        outputResult.append(result)
    }
    displayScore(userCount, compCount)
})

const displayScore = function(userCount, compCount){
    
    userScore.innerText = userCount
    computerScore.innerText = compCount
    // points.push(...score)
    // localStorage.setItem('points',JSON.stringify(points))

    // console.log("user -" ,userCount , "machine -",compCount)
}