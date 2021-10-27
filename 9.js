function filter(arr, fn) {
    let array = []
    for (i = 0; i < arr.length; i++) {
        if(fn(arr[i])){
        array.push(arr[i])
        }
    }
    return array
}

var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]
console.log(input); 