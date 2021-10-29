class MyString {
    constructor(){

    }

    reverse(string){
        let newString = ''
        for (let i = 0; i < string.length; i++){
            newString += string[(string.length - 1) - i];
         }
        return newString
    }
    ucFirst(string){
        let newString = string[0].toUpperCase() + string.slice(1)
        return newString
    }
    ucWords(string) {
        let newString = ''
        newString = string.split(" ")

        let ucString
        for(let i=0; i < newString.length; i ++) {
            newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1)
            ucString += newString[i]
        }

        ucString = newString.toString();
        return ucString

    }
}

var str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
