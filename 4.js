function add(a, b) { 
    return a + b; 
}

function square(x) {
    return x * x
}

function fmap(a, gen){
    return function generator() {
        let arr = []
        for(let i = 0; i < arguments.length; i++) {
            arr[i] = arguments[i] 
        }
        result = a(gen.apply(null, arr));
        return result
    }
}

var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); 
console.log(squareAdd(5, 7));