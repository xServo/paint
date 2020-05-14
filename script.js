const container = document.querySelector("#container");
function colorPicker (i) {
	console.log(i);
	color = i;
}
var color = "white";
var size = 256;
const square = Math.sqrt(size);
function changeSize() {
	var size = prompt("Choose your grid size. (default is 256)");
	const square = Math.sqrt(size);
}
var row = 1;
var cnt = 1;
for (i = 0; i < size; i++) {
	var div = document.createElement("div");
	div.classList.add("square");
	div.setAttribute("id", i);
	div.addEventListener("mouseover", function (e) {
		e.target.style.background = color;
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
let reset = document.getElementById("reset");
reset.addEventListener('click', function(){location.reload()});
let yellow = document.getElementById("yellow");
yellow.addEventListener('click', function(){colorPicker("yellow")});
let green = document.getElementById("green");
green.addEventListener('click', function(){colorPicker("green")});
let pink = document.getElementById("pink");
pink.addEventListener('click', function(){colorPicker("deeppink")});
let blue = document.getElementById("blue");
blue.addEventListener('click', function(){colorPicker("blue")});
let orange = document.getElementById("orange");
orange.addEventListener('click', function(){colorPicker("orange")});
let red = document.getElementById("red");
red.addEventListener('click', function(){colorPicker("red")});
let chooseSize = document.getElementById("size");
chooseSize.addEventListener('click', function(){changeSize()});
