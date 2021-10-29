class Worker {
    constructor(name, surname, rate, days) {
        this._name = name
        this._surname = surname
        this._rate = rate
        this._days = days
    }

    getSalary() {
        let salarie = this._rate * this._days
        return salarie
    }

    getSurname(){
        return this._surname
    }
    getRate(){
        return this._rate 
    }
    getDays(){
        return this._days
    }
    getName(){
        return this._name
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary())
