
var orderHamburger = {
    SIZE_SMALL: {param: "SIZE_SMALL", price: 50, calorie: 20},
    SIZE_LARGE: {param: "SIZE_LARGE", price: 100, calorie: 40},
    STUFFING_CHEESE: {param: "STUFFING_CHEESE", price: 10, calorie: 20},
    STUFFING_SALAD: {param: "STUFFING_SALAD", price: 20, calorie: 5},
    STUFFING_POTATO: {param: "STUFFING_POTATO", price: 15, calorie: 5},
    TOPPING_MAYO: {param: "TOPPING_MAYO", price: 20, calorie: 5},
    TOPPING_SPICE: {param: "TOPPING_SPICE", price: 15, calorie: 0}
};

function Hamburger(size, stuffing) {
    if(!!size.param && !!stuffing.param) {
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

Hamburger.prototype.addSouce = function(souce) {
    let plusSouce = this.params.souce
    var souceIs = 0;

        for (var i = 0; i < plusSouce.length; i++) {
            if (plusSouce[i]?.param === souce.param) {
                souceIs++;
            }
        }
        if (!souceIs) {
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
    let soucePrice = 0

    for (var i = 0; i < this.params.souce?.length; i++) {
        soucePrice += this.params.souce[i]?.price;
    }

    totalPrice = sizePrice + stuffingPrice + soucePrice 
    return totalPrice
}

Hamburger.prototype.calculateCalories = function () {
    let totalCalories
    let sizeCalories = this.params.size.calorie
    let stuffingCalories = this.params.stuffing.calorie

    totalCalories = sizeCalories + stuffingCalories
    return totalCalories
}

// var hamburger = new Hamburger(orderHamburger.SIZE_SMALL, orderHamburger.STUFFING_CHEESE);
// // добавка из майонеза
// hamburger.addSouce(orderHamburger.TOPPING_MAYO);
// // спросим сколько там калорий
// console.log("Calories: %f", hamburger.calculateCalories());

var h2 = new Hamburger(); // => HamburgerException: no size given

// передаем некорректные значения, добавку вместо размера
var h3 = new Hamburger(orderHamburger.TOPPING_SPICE, orderHamburger.TOPPING_SPICE); 
// => HamburgerException: invalid size 'TOPPING_SAUCE'

// добавляем много добавок
var h4 = new Hamburger(orderHamburger.SIZE_SMALL, orderHamburger.STUFFING_CHEESE);
hamburger.addSouce(orderHamburger.TOPPING_MAYO);
hamburger.addSouce(orderHamburger.TOPPING_MAYO); 


