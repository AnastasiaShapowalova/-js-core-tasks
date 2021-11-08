let countAmount = class {
    constructor(flats, panels, stations, transmission) {
        this.flat = flats,
        this.panel = panels, 
        this.station = stations,
        this.power = transmission;
    }

    //кількість електрики потрібної всім квартирам на добу
    electricityNeed() {
        let day = 0.004;
        let night = 0.001;
        
        let i = 0;
        let sum
        sum = this.flat.reduce(function (newArr, amount) {
                newArr.push(amount.num);
                return newArr
        }, [])
        sum.map(item => i += item);

        let electricityNeed = i * (day + night)
        return(electricityNeed);
    }

    //кількість електропередачі на добу
    electricitySpent() {
        let electricitySpent = 0;
        let sum = this.power.reduce(function (newArr, amount) {
            newArr.push(amount.exertion);
            return newArr
        }, [])
        sum.map(item => electricitySpent += item)
        return(electricitySpent);
    }

    //ціна за електропередачу на добу
    moneySpent() { 
        let money = 0;
        let sum = this.power.reduce(function (newArr, amount) {
            newArr.push(amount.price);
            return newArr
        }, [])
        sum.map(item => money += item)
        let moneySpent = this.electricitySpent() * money
        return(moneySpent);
    }

    powerRemainder() {
        let remaind = this.electricitySpent() - this.electricityNeed()
        let res = ''
        if(remaind > 0) {
            res = console.log('you have ' + remaind + ' mV free')
        } else if(remaind < 0) {
            res = console.log('you need ' + remaind + ' mV')
        } else {
            res = alert('all balanced')
        }
        return(res)
    }
}

let price = new countAmount(
        [{num: 400}, {num: 20}, {num: 37}], 
        [{power: 1}, {power: 5}, {power: 4}], 
        [{power: 77}, {power: 40}], 
        [{exertion: 300, price: 3}, {exertion: 20, price: 1.50}, {exertion: 10, price: 1}])
        
price.powerRemainder()



