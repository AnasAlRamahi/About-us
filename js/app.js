'use strict';

let userName = prompt('What is your name?');
let nameOut = 'Welcome, <span>' + userName + '</span> to the website, I hope you enjoy!';
document.write('<h3>' + nameOut + '</h3>');

let score = 0 ;


let questionOne = prompt('Am I 22 years old?', 'yes (y)  or  no(n)').toLowerCase();
switch(questionOne){
case 'yes':
case 'y':
  alert('Right answer!');
  //  console.log('Right answer!');
  score++;
  break;
case 'no':
case 'n':
  alert('Wrong answer!');
  //  console.log('Wrong answer!');
  break;
default:
  alert('Please, answer the questoin next time :P');
  //  console.log('Please, answer the questoin next time :P');

}


let questionTwo = prompt('Have I worked in the IT field before?', 'yes (y)  or  no(n)').toLowerCase();
switch(questionTwo){
case 'yes':
case 'y':
  alert('Wrong answer!');
  //  console.log('Wrong answer!');
  break;
case 'no':
case 'n':
  alert('Right answer!');
  //  console.log('Right answer!');
  score++;
  break;
default:
  alert('Please, answer the questoin next time :P');
  //  console.log('Please, answer the questoin next time :P');

}


let questionThree = prompt('Do I like to travel the world?', 'yes (y)  or  no(n)').toLowerCase();
switch(questionThree){
case 'yes':
case 'y':
  alert('Right answer!');
  //  console.log('Right answer!');
  score++;
  break;
case 'no':
case 'n':
  alert('Wrong answer!');
  //  console.log('Wrong answer!');
  break;
default:
  alert('Please, answer the questoin next time :P');
  //  console.log('Please, answer the questoin next time :P');
}


let questionFour = prompt('Have I graduated from the university or not?', 'yes (y)  or  no(n)').toLowerCase();
switch(questionFour){
case 'yes':
case 'y':
  alert('Right answer!');
  //  console.log('Right answer!');
  score++;
  break;
case 'no':
case 'n':
  alert('Wrong answer!');
  //  console.log('Wrong answer!');
  break;
default:
  alert('Please, answer the questoin next time :P');
//  console.log('Please, answer the questoin next time :P');
}


let questionFive = prompt('Am I married?', 'yes (y)  or  no(n)').toLowerCase();
switch(questionFive){
case 'yes':
case 'y':
  alert('Wrong answer!');
  //  console.log('Wrong answer!');
  break;
case 'no':
case 'n':
  alert('Right answer!');
  //  console.log('Right answer!');
  score++;
  break;
default:
  alert('Please, answer the questoin next time :P');
//  console.log('Please, answer the questoin next time :P');
}

let userNumber = parseInt(prompt('Can you guess the number? You got 4 attempts.'));
let rightAnswer = 365;
let rightAttempt = false;
for (let i = 0; i < 4; i++){
  if (i !== 0){
    userNumber = parseInt(prompt('Guess again...'));
  }
  if(userNumber > rightAnswer){
    if(i !== 3){
      alert('Too high! try again...');
    }else{
      alert('wrong answer!')
    }
  }else if(userNumber < rightAnswer){
    if(i !== 3){
      alert('Too Low! try again...');
    }else{
      alert('wrong answer!');
    }
  }else if(userNumber === rightAnswer){
    alert('Right Answer!!!');
    rightAttempt = true;
    score++;
    break;
  }else{
    if(i !== 3){
      alert('Write a Numeric value to guess...');
    }else{
      alert('wrong answer!');
    }
  }
}
if(!rightAttempt){
  alert('The right answer is ' + rightAnswer);
}





let drinks = ['tea', 'coffee', 'nescafe', 'water', 'pepsi', 'cola'];
let drinkGuess = prompt('What kind of drink do I like to use? You have 6 guesses');
let rightDrinkGuess = false;
for (let i = 0; i < 6; i++){
  for(let j = 0; j < drinks.length-1; j++){
    if (drinkGuess === drinks[j]){
      alert('Right Answer!');
      score++;
      rightDrinkGuess = true;
      break;
    }
  }
  if(rightDrinkGuess){
    break;
  }
  if(i !== drinks.length - 2){
    drinkGuess = prompt('You guessed it wrong! Guess again...');
  }
}

let displayDrinks = '';
for (let i = 0; i < drinks.length; i++){
  displayDrinks += drinks[i] + ' ';
}
alert('The right answers were: ' + displayDrinks);

alert('End of game, you scored ' + score +' out of 7');

