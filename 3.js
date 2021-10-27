
function map(fn, array) { 
    let a = []
    for(var i=0; i < array.length; i++){
        a.push(fn(array[i]));
    }
    return a
} 

function square(x) {
    return x * x
}

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr)