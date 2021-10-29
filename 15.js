function copyOf(item){
    if (Object.prototype.toString.call(item) === '[object Array]') {
        let arrayCopy = item.slice(0)
        return arrayCopy
    } else if (typeof(item) == 'object') {
        let objCopy = {}
        for (key in item) {
            objCopy[key] = item[key]; // копирует каждое свойство objCopy
          }
          return objCopy;
    } else if (Object.prototype.toString.call(item) === '[object Date]') {
        var currentDate = new Date();
        return currentDate;
    }
}

var a = [1, 2, 3];
var b = a; // b указывает на тот же массив
b.push(4);
console.log(a); 

var a = { x: 1, y: 2, z: [1, 2, 3] };
var b = copyOf(a); // b — это отдельный объект
b.x = 10;
console.log(a.x); // 1

var c = new Date(2014, 1, 1);
var d = copyOf(c);
console.log(d)
// d.setFullYear(2015);
// console.log(c.getFullYear())