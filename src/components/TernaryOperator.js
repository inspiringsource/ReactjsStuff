
// ternary operator can be used to simplify an if...else statement.

//if...else statement
let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// can be replaced by a ternary operator
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// exercise 

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');
let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//Source: www.codecademy.com/