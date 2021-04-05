'use strict';

let questionOne = prompt('Am I 22 years old?', 'yes (y)  or  no(n)').toLowerCase();
switch(questionOne){
case 'yes':
case 'y':
  alert('Right answer!');
  //  console.log('Right answer!');
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
  break;
default:
  alert('Please, answer the questoin next time :P');
//  console.log('Please, answer the questoin next time :P');
}


let userName = prompt('What is your name?');
let nameOut = 'Welcome, <span>' + userName + '</span> to the website, I hope you enjoy!';
document.write('<h3>' + nameOut + '</h3>');
