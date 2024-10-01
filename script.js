
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
  
