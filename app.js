//Choices
let answers = [
'Definetly', 
'It is certain', 
'Indeed', 
'Most likely', 
'Yes', 
'Reply hazy',
'Ask again',
'Maybe',
'No',
"Don't count on it",
'Sources say no',
'Doubtful'
]

let pick = answers[Math.floor(Math.random() * 12)]; //Pick random answer

console.log(pick);