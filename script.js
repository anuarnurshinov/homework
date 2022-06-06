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

let functionObj

functionObj = {
    start: function () {
        title = prompt("Как называется ваш проект?", 'КальКуляТор');

        screens = prompt("Какие типы экранов нужно разработать?", "Простой, сложный");

        do {
            screenPrice = prompt("Сколько будет стоить данная работа?", "1000 рублей");
        } while (!functionObj.isNumber(screenPrice));

        adaptive = confirm("Нужен ли адаптив на сайте?");

        service1 = prompt('Какой дополнительный тип услуги нужен?', 'Создание слайдера');

        servicePrice1 = prompt("Сколько это будет стоить?", "1000 рублей");

        service2 = prompt('Какой дополнительный тип услуги нужен?', 'Создание слайдера');

        servicePrice2 = prompt("Сколько это будет стоить?", "1000 рублей");

        allServicePrices = functionObj.getAllServicePrices()
        fullPrice = functionObj.getFullPrice()
        servicePercentPrice = functionObj.getServicePercentPrice()
        title = functionObj.getTitle()
        functionObj.logger()

    },
    isNumber: function (num) {
        return (!isNaN(parseFloat(num)))
            && isFinite(num)
            && !(num.length > num.trim().length)
    },
    getAllServicePrices: function () {
        if (functionObj.isNumber(servicePrice1) && functionObj.isNumber(servicePrice2)) {
            return (+servicePrice1) + (+servicePrice2)
        }
        else ("Что то пошло не так")
    },
    getFullPrice: function () {
        return (+screenPrice) + allServicePrices
    },
    getTitle: function () {
        title.replace(/\s/g, '');
        return title[0].toUpperCase() + title.slice(1).toLowerCase()
    },
    getServicePercentPrice: function () {
        return Math.ceil(fullPrice - (fullPrice * (rollback / 100)))
    },
    logger: function () {
        console.log(typeof screenPrice);
        console.log(typeof allServicePrices);
        console.log(typeof servicePrice1);
        console.log(typeof servicePrice2);

        console.log(typeof title);
        console.log(typeof fullPrice);
        console.log(typeof adaptive);
        console.log(screens);
        console.log('Процент отката посреднику за работу - ' + functionObj.getServicePercentPrice())
        console.log('Стоимость верстки экранов ', screenPrice, ' рублей');
        console.log('Стоимость разработки сайта', fullPrice, ' рублей');

        for (const key in functionObj) {
            console.log(key)
        }
    }
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
functionObj.start()






