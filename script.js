let title = prompt("Как называется ваш проект?", 'КальКуляТор');
let screens = prompt("Какие типы экранов нужно разработать?", "Простой, сложный");
let screenPrice = parseInt(prompt("Сколько будет стоить данная работа?", "1000 рублей").replace(/[\s.,%]/g, ''))
let rollback = 15;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Создание слайдера')
let servicePrice1 = parseInt(prompt("Сколько это будет стоить?", "1000 рублей").replace(/[\s.,%]/g, ''))
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'Создание слайдера')
let servicePrice2 = parseInt(prompt("Сколько это будет стоить?", "1000 рублей").replace(/[\s.,%]/g, ''))
let allServicePrices = function getAllServicePrices() {
    return servicePrice1 + servicePrice2
}
let fullPrice
function getFullPrice(params) {
    fullPrice = parseInt(fullPrice)
    fullPrice = screenPrice + allServicePrices()
}
getFullPrice(fullPrice)
function getTitle(title) {
    title.replace(/\s/g, '');
    return title[0].toUpperCase() + title.slice(1).toLowerCase()
}
servicePercentPrice = function getServicePercentPrices() {
    return Math.ceil(fullPrice - (fullPrice * (rollback / 100)))
}
console.log(servicePercentPrice())


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



console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens);
console.log('Процент отката посреднику за работу - ' + servicePercentPrice())
// console.log('Стоимость верстки экранов ', screenPrice, ' рублей');
// console.log('Стоимость разработки сайта', fullPrice, ' рублей');
