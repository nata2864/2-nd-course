//Задание 1
let str = 'js';

console.log(str.toUpperCase());

//Задание 2
const greating = ['Привет', 'Расскажи', 'как', 'твои', 
    'дела'];
    
    const search = 'как';
    
    let index = -1; // Объявляем переменную с начальным значением

    for (let i = 0; i < greating.length; i++) {
      if (greating[i].toUpperCase().startsWith(search.toUpperCase())) {
        index = i; 
      
      }
    }
      let shortGreating = greating.slice(index);
      console.log(shortGreating);

//Задание 3
let number = 32.58884;
Math.floor(number);
Math.ceil(number);
Math.round(number);

//Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

console.log(getRandomInteger(1,10));

//Задание 6
let randomNumbersArray = [];

let createRandomArray = (number) =>{

let randomNumbersArrayLength = Math.floor(number/2);
 
for(let i = 0; i < randomNumbersArrayLength; i++){
  randomNumbersArray.push(getRandomInteger(0,number));
}
};
createRandomArray(10);

//Задание 7 
const getRandomInteger2 = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Задание 8
console.log(new Date());

//Задание 9
let currentDate = new Date();

let futureDate = new Date(currentDate); 
futureDate.setDate(currentDate.getDate() + 73);

console.log('Дата через 73 дня:', futureDate);

//Задание 10
let myDate = new Date();
let messageDay = '';
let messageTime = '';

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
  "Пятница", "Суббота"];
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let createMessageData = () => {

messageDay = 'Дата: '+ myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' — это ' + days[myDate.getDay()] ;
messageTime = 'Время: '+ myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();

}

createMessageData();
