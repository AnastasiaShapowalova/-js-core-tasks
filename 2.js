function sequence(start, step){

    start = start || 0
    step = step || 1
    let value = start 
    return function(){
        let returnValue = value
        value = value +  step
        return returnValue
    }
}

function take(fn, count) {
    let arr = []

    for(let i = 0; i < count; i++) {
        arr[i] = fn(count[i])
    }
    return arr
}

console.log(take(sequence(0, 2), 5)); // [0, 2, 4, 6, 8 