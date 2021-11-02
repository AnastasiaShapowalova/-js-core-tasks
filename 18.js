(function tableCreate(){
  var body = document.body,
      tbl  = document.createElement('table');
      tbl.style.border = '1px solid black';

  for(var i = 0; i < 5; i++){
    //добавляет новую строку в таблицу и возвращает на неё ссылку
      var tr = tbl.insertRow();
      for(var j = 0; j < 5; j++){
              var td = tr.insertCell();
              td.appendChild(document.createTextNode(''));
              td.style.border = '1px solid black';
              td.style.width  = '28px';
              td.style.height  = '28px';
              td.className = 'white'
      }
  }
  body.appendChild(tbl);
})()
let tds = document.querySelectorAll("td");

for (let i = 0; i < tds.length; i++) {
tds[i].onclick = function (e) {
  if (e.target.style.backgroundColor !== "black") {
    e.target.style.backgroundColor = "black";
  } else {
    e.target.style.backgroundColor = "white";
  }
};
}


const changeColorDark = () => {
  let invert
  (document.getElementsByClassName('white')) ? 
 (invert = document.getElementsByClassName('white')) : (invert = document.getElementsByClassName('black'));

 if(invert.className !== 'black'){
               Object.values(invert).map(item => item.className = 'black')
         } else if(invert.className !== 'white'){
               Object.values(invert).map(item => item.className = 'white')
         }
}