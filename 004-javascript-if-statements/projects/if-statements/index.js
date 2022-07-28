const prompt = require ('prompt-sync')();

let age = prompt('What is your age? ');

console.log(`your age is ${age}`);

let state = prompt('What state do you live in? ');
 console.log(`you live in ${state}`)

//console.log(typeof age)

//with this code, age is a string
//but we can convert it into a number
//we do this using parseInt
//let numberAge = parseInt(age)
//console.log(`numberAge is a ${typeof numberAge}`)

//this first line is a string
//console.log('age >= 21');
//this second line will give use a boolean
//and evaluate it to true or false depending on what age is
//console.log(age >= 21)

//now we want to condition a message based on the value of age

//if (age >=21) {
  //  let state = prompt('What state do you live in? ');
  //  console.log(`you live in ${state}`);
  //  if (state === "RI"){
  //  console.log('you may enter this site');
  //  }
  //  else {console.log('you live out of state. sad.')}
//}
//else {
//    console.log('too bad, so sad')
//}

//another way to do this same thing using &&
//you have to assign both age and state variables first
//using the prompt command
//then you would use the code below

if (age >= 21 && state === 'RI'){
    console.log('You may enter this website, congrats!');
}
else if(age >= 21 && state !== 'RI'){
    console.log(`You're old enough but you don't live in RI`)
}
else{
    console.log(`You may not enter this site, sorry dude.`)
}
