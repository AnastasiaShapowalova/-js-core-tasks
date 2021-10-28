
// об'єкт об'єктів з параметрами бургера
var orderHamburger = {
    SIZE_SMALL: {param: "SIZE_SMALL", price: 50, calorie: 20},
    SIZE_LARGE: {param: "SIZE_LARGE", price: 100, calorie: 40},
    STUFFING_CHEESE: {param: "STUFFING_CHEESE", price: 10, calorie: 20},
    STUFFING_SALAD: {param: "STUFFING_SALAD", price: 20, calorie: 5},
    STUFFING_POTATO: {param: "STUFFING_POTATO", price: 15, calorie: 5},
    TOPPING_MAYO: {param: "TOPPING_MAYO", price: 20, calorie: 5},
    TOPPING_SPICE: {param: "TOPPING_SPICE", price: 15, calorie: 0}
};

// функція перевіряє на наявність 2 обов'язкових параметрів
function Hamburger(size, stuffing) {
    if(!!size.param && !!stuffing.param) {
        //параметри передаютья функції що опреділяє парметри
        return this.init(size, stuffing)
    } else {
        console.log('not enough arguments')
    }
}

Hamburger.prototype.init = function(size, stuffing) {
    this.params = {
        size: size,
        stuffing: stuffing,
        souce: []
    }
}

//добавка необовязкового параметру
Hamburger.prototype.addSouce = function(souce) {
    // добавляє соус в масив параметрів
    let plusSouce = this.params.souce
    var souceIs = 0;

        for (var i = 0; i < plusSouce.length; i++) {
            if (plusSouce[i]?.param === souce.param) {
                souceIs++;
            }
        }
        if (!souceIs) {
            //якщо немає добавляєм в масив
            plusSouce.push(souce);
        } else {
            console.log("souce already is")
        }
    };

Hamburger.prototype.removeSouce = function(souce) {
    let deleteSouse = this.params.souce;

    for (var i = 0; i < deleteSouse.length; i++) {
        if (deleteSouse[i].param === souce.param) {
            delete deleteSouse[i];
        }
    }
}

Hamburger.prototype.getSouce = function(souce) {
    return this.params.souce
}

Hamburger.prototype.getSize = function () {
    return this.params.size.param
}

Hamburger.prototype.getCalories = function () {
    return this.params.calories.param
}

Hamburger.prototype.calculatePrice = function () {
    let totalPrice
    let sizePrice = this.params.size.price
    let stuffingPrice = this.params.stuffing.price

    totalPrice = sizePrice + stuffingPrice
    return totalPrice
}

Hamburger.prototype.calculateCalories = function () {
    let totalCalories
    let sizeCalories = this.params.size.calorie
    let stuffingCalories = this.params.stuffing.calorie

    totalCalories = sizeCalories + stuffingCalories
    return totalCalories
}

var hamburger = new Hamburger(orderHamburger.SIZE_SMALL, orderHamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addSouce(orderHamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false


// Убрать добавку
hamburger.removeSouce(orderHamburger.TOPPING_MAYO);
// console.log("Have %d toppings", hamburger.getSouce().length); // 1


hamburger.addSouce(orderHamburger.TOPPING_SPICE);
// А сколько теперь стоит? 
console.log("Price with sauce: %f", hamburger.calculatePrice());
