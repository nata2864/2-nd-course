let message = 'Привет';

for(let i=0; i < 2; i++){
    console.log(message);
}

for(let number=1; number <= 5; number++){
    console.log(number);
}

for(let number=7; number <= 22; number++){
    console.log(number);
}

let salaryOfEmployees = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}

for(let employe in salaryOfEmployees){
    console.log( `${employe} - ${salaryOfEmployees[employe]} долларов`)
}

let n = 1000;
let num = 0;

while (n >= 50){
n= n/2;
num++;
}
console.log(num);


for(let numberFirstFriday = 2; numberFirstFriday <= 31; numberFirstFriday+=7)
    {
 console.log (`Сегодня пятница, ${numberFirstFriday}-е число. Необходимо подготовить отчет.`);
}