const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };



const guessNumber = (randomInteger) => {

    let answer = prompt('Угадайте число');

    while (answer != randomInteger) {
  
      answer < randomInteger ? alert('Загаданное число больше') : alert('Загаданное число меньше');
  
      answer = prompt('Угадайте число');
  }

  alert(`Молодец. Загаданное число было ${randomInteger}`)

};


  
