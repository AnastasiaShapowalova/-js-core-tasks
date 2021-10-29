function copyOf(item){
    if (item.constructor === Date) { 
        return new Date(item)
    } 
    return Object.assign( {} ,item);
}

var a = [1, 2, 3];
var b = a; // b указывает на тот же массив
b.push(4);
console.log(a); 

var a = { x: 1, y: 2, z: [1, 2, 3] };
var b = copyOf(a); // b — это отдельный объект
b.x = 10;
console.log(a.x); // 1

var c = new Date();
var d = copyOf(c);
console.log(d)
d.setFullYear(2015);
console.log(c.getFullYear())