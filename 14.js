function dataType(variable) {
    let x = NaN
    let type
     if(arguments.length <= 0) {
        type = "no arguments"
        return type
    } else if (variable === null) {
        type = "null"
        return type
    } else if(Object.prototype.toString.call(variable) === '[object Array]') {
        type = "array"
        return type
    } else if(typeof(variable) == 'object' && variable.length > 0) {
        type = "array-like"
        return type
    } else {
        return typeof variable
    }
}

console.log(dataType(555))//'number'
console.log(dataType(null))//'null'
console.log(dataType())
console.log(dataType(undefined)) //'undefined'
console.log(dataType("undefined"))//'string'
console.log(dataType(false))//'boolean'
console.log(dataType(function() {}))//function
console.log(dataType({name: 'Igg', age: 66}))//object
console.log(dataType([]))//'array'
console.log(dataType({ length: 2, 0: 'a', 1: 'b', hello: 'world'}))//'array-like'
