'use strict';

const inputEl = document.querySelector('#numberTest');
const btnEl = document.querySelector('.btn__test');
const btnNewGameEl = document.querySelector('.btn__new-game');
const userFeedbackEl = document.querySelector('.user-feedback');
const numberCounterEl = document.querySelector('.counter');
const infoInvasionTextEl = document.querySelector('.info-invasion');
const ufoEl = document.querySelector('.ufo');
let numberCounter = 0;

const randomNumber = () => Math.ceil(Math.random() * (1, 100));
const number = randomNumber();
console.log('Número random generado:', number);

let textFeedback = (element, text) => element.innerHTML = text;

const trialCounter = () => {
    numberCounter = numberCounter + 1;
    numberCounterEl.innerHTML = numberCounter; 

    if(numberCounter >= 5 && numberCounter < 10) {
        textFeedback(infoInvasionTextEl, 'Llevas varios intentos, ¡nos van a atacar!');
    } else if(numberCounter >= 10 && numberCounter < 15) {
        textFeedback(infoInvasionTextEl, '¡Estamos perdidos!');
    } else if(numberCounter >= 15 && numberCounter < 20) {
        textFeedback(infoInvasionTextEl, '¡Ay, ay, ay!');
    } else if(numberCounter >= 20) {
        textFeedback(infoInvasionTextEl, '¡No quiero mirar! 😖');
    }
};

function feedbackUser() {
    const numberInput = parseInt(inputEl.value);
    console.log('El contenido del input es:', numberInput);    

    if(numberInput === number) {
        textFeedback(userFeedbackEl, '¡LO CONSEGUISTE, LOS ALIENS SE VAN!');
        btnEl.disabled = true;
    } else if(numberInput > number) {
        textFeedback(userFeedbackEl, '>> Número demasiado alto <<');
    } else if(numberInput < number) {
        textFeedback(userFeedbackEl, '>> Número demasiado bajo <<');
    } else {
        textFeedback(userFeedbackEl, '>> Introduce un número <<');
    }
}

function handleButtonClick(e) {
    e.preventDefault();
    
    feedbackUser();
    trialCounter();
}

function handleNewGame(e) {
    e.preventDefault();
    location.reload();
    
}

btnEl.addEventListener('click', handleButtonClick);
btnNewGameEl.addEventListener('click', handleNewGame);