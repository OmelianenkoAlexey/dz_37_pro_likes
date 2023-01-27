// ! ДЗ 37. Голосування

// Створити програму для відображення результатів голосування.З наступними умовами:

// Як варіанти відповіді - смайлики.За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок,
// під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

const firstSmile = document.querySelector(".firstSmile");
const secondSmile = document.querySelector(".secondSmile");
const thirdSmile = document.querySelector(".thirdSmile");
const fourSmile = document.querySelector(".fourSmile");
const fiveSmile = document.querySelector(".fiveSmile");

const firstNumber = document.querySelector(".firstNumber");
const secondNumber = document.querySelector(".secondNumber");
const thirdNumber = document.querySelector(".thirdNumber");
const fourNumber = document.querySelector(".fourNumber");
const fiveNumber = document.querySelector(".fiveNumber");

let firstBall = 0;
let secondBall = 0;
let thirdBall = 0;
let fourBall = 0;
let fiveBall = 0;

firstSmile.addEventListener("click", e => {
    firstBall += 1;
    firstNumber.innerText = `${firstBall}`;
});

secondSmile.addEventListener("click", e => {
    secondBall += 1;
    secondNumber.innerText = `${secondBall}`;
});

thirdSmile.addEventListener("click", e => {
    thirdBall += 1;
    thirdNumber.innerText = `${thirdBall}`;
});

fourSmile.addEventListener("click", e => {
    fourBall += 1;
    fourNumber.innerText = `${fourBall}`;
});

fiveSmile.addEventListener("click", e => {
    fiveBall += 1;
    fiveNumber.innerText = `${fiveBall}`;
});

