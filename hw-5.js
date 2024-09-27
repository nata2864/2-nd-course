const getMinNumber = (a,b) => {

    return a > b ? b : a

}
   
getMinNumber(9,6);

const getEvenNumber = n  => {

    return n % 2 == 0 ? 'Число четное' : 'Число нечетное'

}

getEvenNumber(6);

const getSquareNumber = n => n**2;

console.log(getSquareNumber(2));

 const getNumber = (a,b) => {

    if (a === null || b === null) {
        return 'Одно или оба значения являются null';
    }

    if (isNaN(Number(a)) || isNaN(Number(b))){
         return 'Одно или оба значения не являются числом'

    } 
        return a * b
}      

getNumber('пять', 5);



const checkNumber = number => {

    if (number === null || isNaN(Number(number)) ) {
        return 'Переданный параметр не является числом';
    } else {  
        return `${number} в кубе равняется ${number**3}`   

}
}

checkNumber(prompt('Введите число'));


function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

let circle1 = {
    radius: 3,
    getArea,
    getPerimeter 
 }




let circle2 = {
    radius: 8,
    getArea ,
    getPerimeter 
}

circle1.getArea();
circle2.getArea();
circle1.getPerimeter();
circle2.getPerimeter();