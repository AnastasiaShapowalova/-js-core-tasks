function partialAny(func) {
    var argsPart = [];
    for (var e = 1; e < arguments.length; e++) {
        argsPart.push(arguments[e]);
    }
    return function() {
        var argsFn = [];
        var newArr = [];

        for (var e = 0; e < arguments.length; e++) {
            argsFn.push(arguments[e]);
        }
        for (var i = 0; i < argsPart.length; i++) {
            if (argsPart[i] === undefined){
                newArr.push(argsFn[0]);
                argsFn.splice(0, 1);
            } else {
                newArr.push(argsPart[i]);
            }
        }
        return func.apply(null, newArr.concat(argsFn))
    }
}

function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
var test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3