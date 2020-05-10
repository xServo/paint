const container = document.querySelector("#container");

//function colorChanger(id) {
//	console.log(i);
//	var div = document.getElementById(id);
//	div.style.color = "red";
//}
var size = prompt("Choose your grid size. (ex. 256)");
const square = Math.sqrt(size)
var row = 1;
var cnt = 1;
for (i = 0; i < size; i++) {
	var div = document.createElement("div");
	div.classList.add("square");
	div.setAttribute("id", i);
	div.addEventListener("mouseover", function (e) {
		e.target.style.background = "red";
	});

	// addding to grid
	if (cnt <= square) {
	div.style.cssText = "grid-column: " + cnt + "; grid-row: " + row + ';';
	}
	else {
	row++;
	cnt = 1;
	div.style.cssText = "grid-column: " + cnt - 4 + "; grid-row: " + row + ';';
	}
	container.appendChild(div);
	cnt++;
}