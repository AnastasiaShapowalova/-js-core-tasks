function createNode(name) {  
    var n = document.createElement(name);
    return n;
}
function addClass(el, klass) {
    el.classList.add(klass) 
}
function hasClass(el, klass) {
    let res
    el.classList.contains(klass) ? res=true : res=false
    return res
}
function removeClass(el, klass) {
    el.classList.remove(klass) 
}

function l(x) {
    console.log(x);
}

const nod = createNode('div')
l(nod)
addClass(nod, 'class name')
l(hasClass(nod, 'class'))
removeClass(nod, 'class')
l(hasClass(nod, 'class'))
