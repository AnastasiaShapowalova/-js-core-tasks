function pluck(objects, fieldName) {
    let arr = []
    for(i = 0; i < objects.length; i++) {
        arr.push(objects[i][fieldName])
    }
    return arr
}
   
var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
  ];
  
  console.log(pluck(characters, 'name')); // ['barney', 'fred']
  