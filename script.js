'use strict'

let title
let screens = []
let screenPrice = 0
let adaptive

let services = {}

let rollback = 15
let allServicePrices = 0
let fullPrice = 0
let servicePercentPrice = 0

let mainHeader = document.getElementsByTagName("h1")[0]
let heandlerBtn1 = document.getElementsByClassName("handler_btn")[0]
let heandlerBtn2 = document.getElementsByClassName("handler_btn")[1]
let screenBtn = document.querySelector(".screen-btn");
let otherItemsPercent = document.querySelectorAll(".percent.other-items ")
let otherItemsNumber = document.querySelectorAll(".number.other-items")
let inputRange = document.querySelector(".rollback>input")
let span = document.querySelector(".rollback>span")
let inputs = document.getElementsByClassName("total-input")
let screensBlocks = document.querySelectorAll("screen")

const appData = {
    start: function () {


        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrice()
        appData.getTitle()
        appData.logger()
        appData.switch()

    },
    asking: function () {
        do {
            title = prompt("Как назвывается ваш проект", "Калькулятор верстки");
        } while (!appData.isString(title));
        for (let i = 0; i < 2; i++) {
            let name
            let price
            do {
                name = prompt("Какие типы экранов нужно разработать?", "Простой, сложный");;
            } while (!appData.isString(name));
            do {
                price = prompt("Сколько будет стоить данная работа?", "1000");
            } while (!appData.isNumber(price));
            screens.push({ id: i, name: name, price: price, })
        }

        for (let i = 0; i < 2; i++) {
            let name
            do {
                name = prompt('Какой дополнительный тип услуги нужен?', 'Создание слайдера')
            } while (!appData.isString(name));
            let price
            do {
                price = prompt("Сколько это будет стоить?", "1000");
            } while (!appData.isNumber(price));
            services[name + " № " + i] = price
        }
        adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function () {
        screenPrice = screens.reduce(function (sum, current) {
            return sum + +current.price
        }, 0)
        for (let key in services) {
            allServicePrices += +services[key]
        }
    },
    isNumber: function (num) {
        return (!isNaN(parseFloat(num)))
            && isFinite(num)
            && !(num.length > num.trim().length)
    },
    isString: function (str) {
        return (isNaN(str))
            && !(str.length > str.trim().length)
    },
    getFullPrice: function () {
        fullPrice = (+screenPrice) + (+allServicePrices)
    },
    getTitle: function () {
        title.replace(/\s/g, '');
        title = title[0].toUpperCase() + title.slice(1).toLowerCase()
    },
    getServicePercentPrice: function () {
        servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)))
    },
    logger: function () {
        // console.log(screenPrice);
        // console.log(allServicePrices);
        // console.log(typeof servicePrice1);
        // console.log(typeof servicePrice2);

        // console.log(typeof title);
        // console.log(servicePercentPrice);
        // console.log(typeof adaptive);
        // console.log(screens);
        console.log('Процент отката посреднику за работу - ' + servicePercentPrice)
        // console.log('Стоимость верстки экранов ', screenPrice, ' рублей');
        console.log('Стоимость разработки сайта', fullPrice, ' рублей');

        // for (const key in appData) {
        //     console.log(key)
        // }
        console.log(services);
        console.log(screenPrice);

    },
    switch: function () {
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
    }
}

// appData.start()






