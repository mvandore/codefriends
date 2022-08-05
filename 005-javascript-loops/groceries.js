//this is grocery list homework assignment to practice arrays

const prompt = require('prompt-sync')();
let answer;
let groceryList = [];
do {
    answer = prompt('Would you like to "add", "show" or "quit"? ');
    if (answer === "show"){
        if (groceryList.length === 0){
            console.log(`Your grocery list is empty`)
        }
            else (console.log(`You have ${groceryList.join(`, `)} on your grocery list`))
    }
    else if (answer === "add"){
        groceryList.push(prompt('What would like to add to your list? '));
    }
 
    
    

} while(answer !== 'quit' );
