
/Функция нахождения рандомного числа/
const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };


/Код к игре №1/
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

/Код к игре №2/

const getUserAnswer = ( randomInteger1, randomInteger2, randomIndex) => {

let userAnswer; 
let operationResult; 
 
    switch(randomIndex) {
        case 1: 
        userAnswer = prompt(`Сколько будет ${randomInteger1} + ${randomInteger2}? Напишите ответ`);
        operationResult = randomInteger1 + randomInteger2;
          break;
      
          case 2: 
          userAnswer = prompt(`Сколько будет ${randomInteger1} - ${randomInteger2}? Напишите ответ`);
          operationResult = randomInteger1 - randomInteger2;
            break;
    
            case 3: 
            userAnswer = prompt(`Сколько будет ${randomInteger1} * ${randomInteger2}? Напишите ответ`);
        operationResult = randomInteger1 * randomInteger2;
          break;
    
          case 4: 
          userAnswer = prompt(`Сколько будет ${randomInteger1} / ${randomInteger2}? Напишите ответ`);
        operationResult = randomInteger1 / randomInteger2;
          break;
      }


if (userAnswer==operationResult){

  alert('Молодец! Ответил правильно');

}else {

  alert(`Неверно. Правильный ответ: ${operationResult}`);
   
}
}
  
