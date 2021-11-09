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
	var cell = document.getElementsByTagName("td");
	tds[i].onclick = function (e) {
		if(cell[i].className == 'white') {
			cell[i].classList.add('black');
			cell[i].classList.remove('white');
		} else if(cell[i].className == 'black') {
			cell[i].classList.add('white');
			cell[i].classList.remove('black');
		}
	}
}

function changeColor () {
	var cell = document.getElementsByTagName("td");
			for (let i = 0; i < cell.length; i++) {
				if(cell[i].className == 'white') {
					cell[i].classList.add('black');
					cell[i].classList.remove('white');
				} else if(cell[i].className == 'black') {
					cell[i].classList.add('white');
					cell[i].classList.remove('black');
				}
	}
}