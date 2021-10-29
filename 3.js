class Worker {
    constructor(name, surname, rate, days) {
        this._name = name
        this._surname = surname
        this._rate = rate
        this._days = days
    }
    getSurname(){
        return this._surname
    }
    getName(){
        return this._name
    }
    setRate(rate) {
        this._rate = rate
    };
    getRate(){
      return this._rate 
    }
    setDays(day) {
        this._days = day
    };
    getDays(){
        return this._days
    }
    getSalary() {
        let salarie = 0
        salarie = this._rate * this._days
        return salarie
    }
}

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary());
