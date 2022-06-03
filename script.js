'use strict'

let title
let screens
let screenPrice
let adaptive

let service1
let servicePrice1
let service2
let servicePrice2

let rollback = 15
let allServicePrices
let fullPrice
let servicePercentPrice

const asking = function () {
    title = prompt("Как называется ваш проект?", 'КальКуляТор');

    screens = prompt("Какие типы экранов нужно разработать?", "Простой, сложный");

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?", "1000 рублей");
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");

    service1 = prompt('Какой дополнительный тип услуги нужен?', 'Создание слайдера');

    servicePrice1 = prompt("Сколько это будет стоить?", "1000 рублей");

    service2 = prompt('Какой дополнительный тип услуги нужен?', 'Создание слайдера');

    servicePrice2 = prompt("Сколько это будет стоить?", "1000 рублей");

}
const isNumber = function (num) {
    return (!isNaN(parseFloat(num)))
        && isFinite(num)
        && !(num.length > num.trim().length)
}

const getAllServicePrices = function () {
    if (isNumber(servicePrice1) && isNumber(servicePrice2)) {
        return (+servicePrice1) + (+servicePrice2)
    }
    else ("Что то пошло не так")
}

const getFullPrice = function () {
    return (+screenPrice) + allServicePrices
}

const getTitle = function () {
    title.replace(/\s/g, '');
    return title[0].toUpperCase() + title.slice(1).toLowerCase()
}

const getServicePercentPrice = function () {
    return Math.ceil(fullPrice - (fullPrice * (rollback / 100)))
}



switch (true) {
    case (fullPrice >= 30000):
        console.log("Даем скидку в 10 %")
        break;
    case (fullPrice >= 15000 && fullPrice < 30000):
        console.log("Даем скидку в 5 %")
        break;
    case (fullPrice > 0 && fullPrice < 15000):
        console.log("Скидка не предусмотрена")
        break;
    case (fullPrice <= 0):
        console.log("Что то пошло не так")
        break;
    default:
        break;
}
asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrice()
title = getTitle()


console.log(typeof screenPrice);
console.log(typeof allServicePrices);
console.log(typeof servicePrice1);
console.log(typeof servicePrice2);

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens);
console.log('Процент отката посреднику за работу - ' + getServicePercentPrice())
console.log('Стоимость верстки экранов ', screenPrice, ' рублей');
console.log('Стоимость разработки сайта', fullPrice, ' рублей');



