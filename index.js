const prompt = require('prompt-sync')()

let guess = prompt("Password")

while(guess !== "SE11"){
  guess = prompt("Try again")
}

let competencies = ["if/else", "while", "for", "functions", "objects"]

for(let i = 0; i<5; i++){
  console.log(competencies[i])
}

let age = prompt("What's your age")
age = parseInt(age)

if(age >= 18){
  console.log("You can vote!")
}
else{
  console.log("you can't vote")
}