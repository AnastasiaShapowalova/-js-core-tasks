
const STUFFING_POTATO = {type: 'STUFFING_POTATO', price: '15', calories: '10' };
const STUFFING_SALAD = {type: 'STUFFING_SALAD', price: '20', calories: '5' };
const STUFFING_CHEESE = {type: 'STUFFING_CHEESE', price: '10', calories: '20'};
const TOPPING_MAYO = {type: 'TOPPING_MAYO', price: '20', calories: '5'}

class Hamburger {
    static SIZE_LARGE = { type: 'SIZE_LARGE', price: '100', calories:'40'};
    static SIZE_SMALL = { type: 'SIZE_SMALL', price: '50', calories:'20'};

    static STUFFING_POTATO = {type: 'STUFFING_POTATO', price: '15', calories: '10' };
    static STUFFING_SALAD = {type: 'STUFFING_SALAD', price: '20', calories: '5' };
    static STUFFING_CHEESE = {type: 'STUFFING_CHEESE', price: '10', calories: '20'};
    
    static TOPPING_MAYO = {type: 'TOPPING_MAYO', price: '20', calories: '5'};
    static TOPPING_SPICE = {type: 'TOPPING_SPICE', price: '15', calories: '0'};

    constructor(size, stuffing, topping) {
        if({ type: 'SIZE_LARGE', price: '100', calories:'40'} || { type: 'SIZE_SMALL', price: '50', calories:'20'}) {
            this.size = size
        } else {
            console.log('not current size')
        }
        if(stuffing == Hamburger.STUFFING_POTATO || stuffing == Hamburger.STUFFING_SALAD || stuffing == Hamburger.STUFFING_CHEESE) {
            this.stuffing = stuffing
        } else {
            console.log('not current stuffing')
        }
        if(topping == Hamburger.TOPPING_MAYO || topping == Hamburger.TOPPING_SPICE) {
            this.topping = topping
        } 
    }
}

Hamburger.prototype.addSouce = function(value) {
        if (this.topping == Hamburger.TOPPING_MAYO || this.topping == Hamburger.TOPPING_SPICE) {
            console.log('topping already exist')
        } 

        if(value == Hamburger.TOPPING_MAYO) {
            return  this.topping = Hamburger.TOPPING_MAYO;
        } else if (value == Hamburger.TOPPING_SPICE){
            return this.topping = Hamburger.TOPPING_SPICE;
        }

        return this.topping = value
};

Hamburger.prototype.removeSouce = function() {
    delete this.topping;
};

Hamburger.prototype.getSouce = function() {
    return this.topping
};

Hamburger.prototype.getSize = function() {
    return this.size
};

Hamburger.prototype.getStuffing = function() {
    return this.stuffing
};

Hamburger.prototype.getPrice = function() {
    try {
        let price = 0;
        let sizePrice = +this.size.price;
        let stuffingPrice = +this.stuffing.price;
        let toppingPrice;
        try {
            toppingPrice = +this.topping.price
        } catch (e) {
            toppingPrice = 0;
        }
        return `${price = sizePrice + stuffingPrice + toppingPrice} `;
    } catch (e) {
        return `${e.name} \n ${e.message}`;
    }
 };

Hamburger.prototype.getCalories = function() {
    try {
        let calories = 0;
        let sizeCalories = +this.size.calories;
        let stuffingCalories = +this.stuffing.calories;
        let toppingCalories;
        try {
            toppingCalories = +this.topping.calories
        } catch (e) {
            toppingCalories = 0;
        }
        return `${calories = sizeCalories + stuffingCalories + toppingCalories} `;
    } catch (e) {
        return `${e.name} \n ${e.message}`;
    }
};

var hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);

console.log(hamburger)
console.log(hamburger.getPrice())
hamburger.addSouce(Hamburger.TOPPING_MAYO);
console.log(hamburger.getCalories())