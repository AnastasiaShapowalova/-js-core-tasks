class Worker {
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }

    getSalary() {
        let salarie = this.rate * this.days
        return salarie
    }
}

var worker = new Worker('Dima', 'Okrushko', 3.5, 20);
var worker_two = new Worker('Angelina', 'Bohdanova', 10, 31);

console.log(worker.getSalary());
console.log(worker_two.getSalary());

