
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


//Код к игре №5



const createContantGame = () => {

  let userGameChoice = prompt('Что выберите: КАМЕНЬ, НОЖНИЦЫ или БУМАГА?');
  userGameChoice = userGameChoice.trim().toUpperCase();
  
  const gamesVariants = ['КАМЕНЬ', 'НОЖНИЦЫ', 'БУМАГА'];
  
  const getRandomIndex = (length) => Math.floor(Math.random() * length);
  
  let computerGameChoice = gamesVariants[getRandomIndex(3)];
  
  let message;
  
  const getMessageResultGame = (playerChoice1, playerChoice2) => {
   
      let winMessage = 'Вы выиграли!';
      let lostMessage = 'Вы проиграли!'; 
      let drawMessage = 'Ничья!';
  
      if (playerChoice1 === playerChoice2) {
          return drawMessage;
      }
   
      switch (playerChoice1) {
          case 'КАМЕНЬ':
              if (playerChoice2 === 'НОЖНИЦЫ') {
                  message = winMessage;
              } else {
                  message = lostMessage;
              }             
              break;
  
          case 'НОЖНИЦЫ':
              if (playerChoice2 === 'БУМАГА') {
                  message = winMessage;
              } else {
                  message = lostMessage;
              }   
              break;
  
          case 'БУМАГА':
              if (playerChoice2 === 'КАМЕНЬ') {
                  message = winMessage;
              } else {
                  message = lostMessage;
              }   
              break;
  
          default:
              message = "Некорректный выбор. Пожалуйста, выберите КАМЕНЬ, НОЖНИЦЫ или БУМАГА.";
              break;
      }
  
      return message;
  }
  
  alert( `Вы выбрали : ${userGameChoice}. Компьютер выбрал : ${computerGameChoice}`)
  alert(getMessageResultGame(userGameChoice, computerGameChoice))


}