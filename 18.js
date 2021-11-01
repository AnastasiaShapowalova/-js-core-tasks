let tds = document.querySelectorAll("td");

for (let i = 0; i < tds.length; i++) {
  tds[i].onclick = function (e) {
    if (e.target.style.backgroundColor !== "black") {
      e.target.style.backgroundColor = "black";
      e.target.style.color = "white";
    } else {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "black";
    }
  };
}