class Validator {


    isEmail(email) {
        const isTrue = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return isTrue.test(email);
    }

    isDomain(domain) {
        const isTrue = /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i
        return isTrue.test(domain);
    }

    isDate(date) {
        const isTrue = /^\d{1,2}\.\d{1,2}\.\d{4}$/
        return isTrue.test(date);
    }

    isPhone(phone) {
        const isTrue = /^(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/
        return isTrue.test(phone);
    }
}


var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92'));