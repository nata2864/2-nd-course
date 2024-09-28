// Задание 1
let numbersArray = [1, 5, 4, 10, 0, 3];

for (let i=0; i<numbersArray.length; i++){
    console.log (numbersArray[i]);

    if (numbersArray[i]===10){
        break
    }
}

// Задание 2
let numbersArray1 = [1, 5, 4, 10, 0, 3];

let isContains = numbersArray1.includes(4); 


// Задание 3
let numbersArray2 = [1, 3, 5, 10, 20];

let stringFromArr = numbersArray2.join(' ');

console.log (stringFromArr);

// Задание 4
let newNumbersArray = [];

for (let i = 0; i < 3; i++) {

  newNumbersArray[i] = [];

  for (let j = 0; j < 3; j++) {
    newNumbersArray[i][j] = 1;

  }
};

// Задание 5
let numbersArray3 = [1, 1, 1];

numbersArray3.push (2, 2, 2);


// Задание 6
let numbersArray4 = [9, 8, 7, 'a', 6, 5];

numbersArray4.sort().pop();

console.log (numbersArray4);

// Задание 7
let numbersArray5 = [9, 8, 7, 6, 5];

let userAnswer = prompt('Угадайте число от 1 до 9');
let isFound = numbersArray5.includes(Number(userAnswer));

isFound? alert('Угадал'): alert('Не угадал');

// Задание 8
let string = 'abcdef';

let splitString = string.split('');

let newString = splitString.reverse();

console.log (newString.join(''));

// Задание 9
let numbersArray6 = [[1, 2, 3],[4, 5, 6]];
let numbersArray7 = [].concat(...numbersArray6);

console.log(numbersArray7);

// Задание 10
let numbersArray8 = [3, 6, 9, 10, 1, 7, 8];

for (let i=0; i < numbersArray8 .length-1; i++){

    console.log (numbersArray8[i] + numbersArray8 [i+1]);
};


// Задание 11
let numbersArray9 = [1, 7, 9, 2];

let squares = numbersArray9.map(num =>  num * num);

// Задание 12
let stringArray = ['Кресло', 'Стул', 'Стол'];

let lengthOfEveryStrings = stringArray.map(string => string.length);

// Задание 13
let numbersArray10 = [1, -5, 4, 10, 0, -3];

let negativeNumbersArray = numbersArray10.filter(number => number < 0);

// Задание 14
let numbersArray11 = [];
for (let i = 0; i < 10; i++) {
    numbersArray11.push(Math.floor(Math.random() * 11));
}

let filteredNumbersArray11 = numbersArray11.filter(number => number % 2 === 0 && number > 0);

// Задание 15
let numbersArray12 = [];

const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };

for (let i = 0; i < 6; i++) {

    numbersArray12.push(getRandomInteger(1,10));
}

let sumArrayElements = numbersArray12.reduce((total, number) => total + number, 0);
let average =  sumArrayElements / numbersArray12.length;

console.log(average);



