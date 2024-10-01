
//Функция нахождения рандомного числа
const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };


//Код к игре №1
const guessNumber = (randomInteger) => {

    let answer = prompt('Угадайте число (или нажмите Отмена для выхода)');

   

    while (answer != randomInteger) {

      if (answer === null) {
        alert('Игра окончена. Вы вышли.');
        return;
      }
  
      answer < randomInteger ? alert('Загаданное число больше') : alert('Загаданное число меньше');
  
      answer = prompt('Угадайте число');
  }

  alert(`Молодец. Загаданное число было ${randomInteger}`)

};

//Код к игре №2

const operations = ['+', '-', '*', '/'];

const calculate = (a, operation, b) => {
  const func = new Function('a', 'b', `return a ${operation} b;`);
  return func(a, b);
};

const getUserAnswer = ( randomInteger1, randomInteger2, randomIndex) => {

const userAnswer = prompt(`Сколько будет ${randomInteger1}${operations[randomIndex]}${randomInteger2}? Напишите ответ`);
const operationResult = calculate(randomInteger1, operations[randomIndex], randomInteger2);


if (+userAnswer===operationResult){

  alert('Молодец! Ответил правильно');

}else {

  alert(`Неверно. Правильный ответ: ${operationResult}`);
   
}
}
  
//Код к игре №3

userText = '';
const reverUserText = () => {
  
  let userText = prompt ('Введите текст');
  
  let reverseText = userText.split('').reverse().join('');
  
  alert(reverseText);
};



//Код к игре №4
const quiz = [
  {
      question: "Какой цвет неба?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2 // номер правильного ответа
  },
  {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
  },
  {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
  }
];

let correctAnswer = 0;

let createQuizQuestions = () => {
  
  for (let index = 0; index < quiz.length; index++) {

    let userAnswer = prompt(`Ответьте на вопрос: " ${quiz[index].question}"
    Варианты ответов: ${quiz[index].options}
    (Для выхода : нажмите "Отмена")`);
    
        if (userAnswer === null) {
          alert('Вы отказались от ввода');
          break;
        } 
    
          if (+userAnswer === quiz[index].correctAnswer){
          correctAnswer++
          
        } 
    }
    
    alert (`Количество верных ответов: ${correctAnswer}`);
}

