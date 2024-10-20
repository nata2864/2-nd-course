
//Функция нахождения рандомного числа
const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };

// Функция нажатия кнопки "Отмена"
const checkForCancel = (input) => {
  if (input === null) {
    alert('Игра окончена. Вы вышли.');
    return true;  
  }
  return false;  
};

//Функция проверки на ввод числа
const checkNumber = (input) => {

  const parsedInput = Number(input); // Преобразуем строку в число

  if (Number.isNaN(parsedInput) || input.trim() === '') {
    alert('Ошибка: Пожалуйста, введите корректное число.');

    return true;
  }

    return false; 
};



//Код к игре №1
const guessNumber = () => {

  const randomInteger = getRandomInteger(1,100)

    let userAnswer = prompt('Угадайте число');
    
    if (checkForCancel(userAnswer) || checkNumber(userAnswer)) return;

    let answer = Number(userAnswer);

    
    while (+answer !== randomInteger) {

      answer < randomInteger ? alert('Загаданное число больше') : alert('Загаданное число меньше');
  
      userAnswer = prompt('Угадайте число');

      if (checkForCancel(userAnswer) || checkNumber(userAnswer)) return;

     let answer = Number(userAnswer);
  }

  alert(`Молодец. Загаданное число было ${randomInteger}`)

};

//Код к игре №2
const operations = ['+', '-', '*', '/'];

const calculate = (a, operation, b) => {

  const func = new Function('a', 'b', `return a ${operation} b;`);

  return func(a, b);
};

const getUserAnswer = () => {

  const randomInteger1 = getRandomInteger(1,100);
  const randomInteger2 = getRandomInteger(1,100);
  const randomIndex = getRandomInteger(0,3);

const userAnswer = prompt(`Сколько будет ${randomInteger1}${operations[randomIndex]}${randomInteger2}? Напишите ответ`);

 if (checkForCancel(userAnswer) || checkNumber(userAnswer)) return;

const operationResult = calculate(randomInteger1, operations[randomIndex], randomInteger2);

+userAnswer===operationResult? alert('Молодец! Ответил правильно'): alert(`Неверно. Правильный ответ: ${operationResult}`)

}
  
//Код к игре №3
const reverUserText = () => {
  
  let userText = prompt ('Введите текст');

  if (checkForCancel(userText)) return;
  
  alert(userText.split('').reverse().join(''));
 
};

//Код к игре №4
const quiz = [
  {
      question: "Какой цвет неба?",
      options: [" 1. Красный ", " 2. Синий ", " 3. Зеленый "],
      correctAnswer: 2 
  },
  {
      question: "Сколько дней в неделе?",
      options: [" 1. Шесть ", " 2. Семь ", " 3. Восемь "],
      correctAnswer: 2
  },
  {
      question: "Сколько у человека пальцев на одной руке?",
      options: [" 1. Четыре ", " 2. Пять ", " 3. Шесть "],
      correctAnswer: 2
  }
];

let totaalCorrectAnswers = 0;

let createQuizQuestions = () => {
  
  for (let index = 0; index < quiz.length; index++) {

    const {question, options, correctAnswer} = quiz[index]

    let userAnswer = prompt(` ${question}\n ${options.join('')} `);
    
    if (checkForCancel(userAnswer) || checkNumber(userAnswer)) return;
    
          if (+userAnswer === correctAnswer){
            totaalCorrectAnswers++  
        } 
    }
    
    alert (`Количество верных ответов: ${totaalCorrectAnswers}`);
}


//Код к игре №5
const getMessageResultGame = (playerChoice1 , playerChoice2) => {

  if (playerChoice1 === playerChoice2) {
    return 'Ничья!';
  }

  const winUsersAnswers = {
    'КАМЕНЬ': 'НОЖНИЦЫ',
    'НОЖНИЦЫ': 'БУМАГА',
    'БУМАГА': 'КАМЕНЬ',
  };

 return winUsersAnswers [playerChoice1] === playerChoice2 ? 'Вы выиграли!' : 'Вы проиграли!';
}
  


const createContantGame = () => {

  let userGameChoice = prompt('Что выберите: КАМЕНЬ, НОЖНИЦЫ или БУМАГА?').trim().toUpperCase();
 
  const gamesVariants = ['КАМЕНЬ', 'НОЖНИЦЫ', 'БУМАГА'];
  
  const getRandomIndex = (length) => Math.floor(Math.random() * length);
  
  let computerGameChoice = gamesVariants[getRandomIndex(gamesVariants.length)];

    alert( `Вы выбрали : ${userGameChoice}. Компьютер выбрал : ${computerGameChoice}`);

    alert(getMessageResultGame (userGameChoice, computerGameChoice))

} 

//Код к игре №6
const getRandomColor = () => {

  const letters = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const changeBackgroundColor = () => {

const backgroundGame = document.querySelector ('#gameblock');

backgroundGame.style.backgroundColor = getRandomColor();

}

