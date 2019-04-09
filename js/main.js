'use strict';

// Cojo el input
const inputEl = document.querySelector('#numberTest');
// Cojo el botón
const btnEl = document.querySelector('.btn-test');
// Cojo el texto de feedback al usuario
const userFeedbackEl = document.querySelector('.user-feedback');
// Cojo el contador de intentos
const numberCounterEl = document.querySelector('.counter');
// Cojo el texto de info invasión
const infoInvasionTextEl = document.querySelector('.info-invasion');
// Cojo la imagen de la nave
const ufoEl = document.querySelector('.ufo');
// Creo un contador
let numberCounter = 0;

function animationUfo() {
    // cada vez que el usuario hace click en prueba la animación de la nave se activa
    // ufoEl.classList.toggle('ufo__animation');
}

const trialCounter = () => {
    // cada vez que el usuario haga click en el botón se tiene que sumar + 1
    numberCounter = numberCounter + 1;
    
    // mostrar cada click que hace en el contador de intentos
    numberCounterEl.innerHTML = numberCounter; 

    if(numberCounter >= 5 && numberCounter < 10) {
    // Si el contador lleva más de 6 intentos aparce un mensaje
        // Llevas varios intentos, nos van a atacar
        infoInvasionTextEl.innerHTML = 'Llevas varios intentos, ¡nos van a atacar!';
    } else if(numberCounter >= 10 && numberCounter < 15) {
        infoInvasionTextEl.innerHTML = '¡Estamos perdidos!';
    } else if(numberCounter >= 15 && numberCounter < 20) {
        infoInvasionTextEl.innerHTML = '¡Ay, ay, ay!';
    } else if(numberCounter >= 20) {
        infoInvasionTextEl.innerHTML = '¡No quiero mirar! 😖';
    }
}

const randomNumber = () => {
    return Math.ceil(Math.random() * (1, 100));
}

// Generar un número aleatorio y muestralo por la consola
const number = randomNumber();
console.log('Número random generado:', number);

function handleButtonClick(e) {
    e.preventDefault();
    
    // Acceder al contenido del input y mostrarlo en la consola
    const numberInput = parseInt(inputEl.value);
    console.log('El contenido del input es:', numberInput);    

    // Comparar el número que el usuario ha escrito en el input con el número aleatorio y pintar el feedback correspondiente en la pantalla
    if(numberInput === number) {
    // Si el número del usuario y el random son iguales
        // Mostrar texto: "¡HAS GANADO, CAMPEONA!"
        userFeedbackEl.innerHTML = "¡HAS GANADO, CAMPEONA!";
    } else if(numberInput > number) {
    // en caso contrario, si es mayor
        // Mostrar texto: "demasiado alto"
        userFeedbackEl.innerHTML = ">> Número demasiado alto <<";
    } else if(numberInput < number) {
    // sino
        // Mostrar texto: "demasiado bajo"
        userFeedbackEl.innerHTML = ">> Número demasiado bajo <<";
    } else {
        userFeedbackEl.innerHTML = ">> Introduce un número <<";
    }

    trialCounter();
    animationUfo();
    
}

// Creo un listener en el botón al hacer click
btnEl.addEventListener('click', handleButtonClick);