let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = parseInt(prompt("Сколько будет стоить данная работа?").replace(/[\s.,%]/g, ''))
let rollback = 15;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = parseInt(prompt("Сколько это будет стоить?").replace(/[\s.,%]/g, ''))
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = parseInt(prompt("Сколько это будет стоить?").replace(/[\s.,%]/g, ''))


let fullPrice = screenPrice + servicePrice1 + servicePrice2


servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)))
console.log(servicePercentPrice)

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

// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);
// console.log(screens.length);
// console.log('Стоимость верстки экранов ', screenPrice, ' рублей');
// console.log('Стоимость разработки сайта', fullPrice, ' рублей');
// console.log(screens.toLowerCase().split(", "));
// console.log('Процент отката посреднику за работу', fullPrice * (rollback / 100));