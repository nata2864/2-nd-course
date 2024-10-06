//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 const arraySortedAge = people.sort((a, b) => a.age - b.age);
 console.log(arraySortedAge);

//Задание 2
const numbers = [3, -4, 1, 9];

const positiveNumbersArray = numbers.filter((number) => number > 0);

console.log(positiveNumbersArray);

const people1 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
 ];

const arrayFilteredByGender = people1.filter((person) => person.gender === 'male')

//Задание 3
const logCurrentDate = () => {
    const currentDate = new Date();
    console.log(currentDate.toLocaleString()); 
};


const intervalId = setInterval(logCurrentDate, 3000);

setTimeout(() => {
    clearInterval(intervalId); 
    console.log("30 секунд прошло"); 
}, 30000);

//Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

//Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));