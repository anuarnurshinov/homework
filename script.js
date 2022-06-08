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


const appData = {
    start: function () {


        appData.asking()
        appData.getAllServicePrices()
        appData.getFullPrice()
        appData.getServicePercentPrice()
        appData.getTitle()
        appData.logger()
        appData.switch()

    },
    asking: function () {
        do {
            title = prompt("Как назвывается ваш проект", "Калькулятор верстки");
        } while (appData.isString(title));
        for (let i = 0; i < 2; i++) {
            let name
            let price
            do {
                name = prompt("Какие типы экранов нужно разработать?", "Простой, сложный");;
            } while (appData.isString(name));
            do {
                price = prompt("Сколько будет стоить данная работа?", "1000");
            } while (!appData.isNumber(price));
            screens.push({ id: i, name: name, price: price, })
        }
        for (let screen of screens) {
            screenPrice += +screen.price
        }


        for (let i = 0; i < 2; i++) {
            let name
            do {
                name = prompt('Какой дополнительный тип услуги нужен?', 'Создание слайдера')
            } while (appData.isString(name));
            let price
            do {
                price = prompt("Сколько это будет стоить?", "1000");
            } while (!appData.isNumber(price));
            services[name] = price
        }
        adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    isNumber: function (num) {
        return (!isNaN(parseFloat(num)))
            && isFinite(num)
            && !(num.length > num.trim().length)
    },
    isString: function (str) {
        return (!isNaN(parseFloat(str)))
            && isFinite(str)
            && !(str.length > str.trim().length)
    },
    getAllServicePrices: function () {
        for (let key in services) {
            allServicePrices += +services[key]
        }
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
        console.log(screenPrice);
        console.log(allServicePrices);
        console.log(typeof servicePrice1);
        console.log(typeof servicePrice2);

        console.log(typeof title);
        console.log(servicePercentPrice);
        console.log(typeof adaptive);
        console.log(screens);
        console.log('Процент отката посреднику за работу - ' + servicePercentPrice)
        console.log('Стоимость верстки экранов ', screenPrice, ' рублей');
        console.log('Стоимость разработки сайта', fullPrice, ' рублей');

        for (const key in appData) {
            console.log(key)
        }

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

appData.start()






