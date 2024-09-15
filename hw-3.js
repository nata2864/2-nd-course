let password = 'пароль';
let userPassword = prompt('Введите пароль');
if (password === userPassword){
    alert ('Пароль введен верно')
} else {
    alert ('Пароль введен неправильно')
}


let c= 10;
if (c > 0 && c < 10) {
    alert ('Bерно')
    } else {
        alert ('Неверно')
}

let d= 1000;
let e = 72;

if (d > 100 || e > 100) {
    alert ('Bерно')
    } else {
        alert ('Неверно')
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let numberMonth = prompt("Введите номер месяца");

switch (numberMonth) {
   case '1':
      alert('Январь. Сезон "Зима"');
      break;
      case '2':
        alert('Февраль. Сезон "Зима"');
        break;
        case '3':
            alert('Март. Сезон "Весна"');
            break;
            case '4':
                alert('Апрель. Сезон "Весна"');
                break;
                case '5':
                alert('Май. Сезон "Весна"');
                break;
                case '6':
                    alert('Июнь. Сезон "Лето"');
                    break;
                    case '7':
                        alert('Июль. Сезон "Лето"');
                        break;
                        case '8':
                            alert('Август. Сезон "Лето"');
                            break;
                            case '9':
                                alert('Сентябрь. Сезон "Осень"');
                                break;
                                case '10':
                                alert('Октябрь. Сезон "Осень"');
                                break;
                                case '11':
                                alert('Ноябрь. Сезон "Осень"');
                                break;
                                case '12':
                                alert('Декабрь. Сезон "Зима"');
                                break;   
   default:
      alert('Неверный номер месяца');
}
