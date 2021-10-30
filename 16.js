const deepCopy = (inObject) =>{
    let outObject, value, key

    if (typeof inObject !== 'object' || inObject == null) {
        return inObject
    }
    if(inObject.constructor === Date) {
        return new Date(inObject)
    }

    outObject = Array.isArray(inObject) ? [] : {}

    
    for (key in inObject) {
        value = inObject[key]

        outObject[key] = deepCopy(value)
    }
        
        return outObject
}
  




var deepObject = { x: 1, y: 2, z: [1, 2, 3], u: undefined, v: null, w: new Date(2014, 1, 1, 12, 0, 0) };
var objectCopy = deepCopy(deepObject); 
objectCopy.x = 10;
console.log(deepObject.x); // 1

objectCopy.z.push(4);
console.log(deepObject.z); // [1, 2, 3]

objectCopy.w.setFullYear(2015);
console.log(deepObject.w.getFullYear()); // 2014