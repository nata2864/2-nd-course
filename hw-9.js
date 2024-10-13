// Задание 1
const headingEl = document.querySelector('h1');
const buttonEl = document.querySelector('.heading-button');

buttonEl.addEventListener('click', () => {

    headingEl.classList.toggle('hidden');

    if (headingEl.classList.contains('hidden')) {
        buttonEl.textContent = 'Показать заголовок';
    } else {
        buttonEl.textContent = 'Скрыть заголовок';
    }
});

// Задание 2
const paragraphEl = document.querySelector('p');

const buttonParagraphEl = document.querySelector('.paragraph-button');

buttonParagraphEl.addEventListener('click',()=>{
    paragraphEl.style.color = 'blue'

});

// Задание 3
const buttonElText = document.querySelector('.heading-button_text');

buttonElText.addEventListener('click',()=>{
    headingEl.textContent = 'Привет, мир!'

});

// Задание 4
const descriptionList = document.querySelectorAll('.description');

descriptionList.forEach(element => {
    element.textContent = 'Измененный текст';
});

// Задание 5
descriptionList.forEach(element => {
    element.textContent = 'Новый текст';
});

// Задание 6
const addTextButton = document.querySelector('.paragraph-button_add');

addTextButton.addEventListener('click',()=>{
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'До скорой встречи!'
    document.body.appendChild(newParagraph);
});

// Задание 7
const buttonElTextRemove = document.querySelector('.paragraph-button_remove');

const firstParagraphEl = document.querySelector('.description');

buttonElTextRemove.addEventListener('click',()=>{
    firstParagraphEl.remove();
});