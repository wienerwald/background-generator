var css = document.querySelector("#report");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var generate = document.getElementById("generate");

setGradient();

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomColor() {
	var rcRaw = Math.floor(Math.random() * 16777215).toString(16);
	var rc = ("000000" + rcRaw).slice(-6);
	return ("#" + rc);
}

function randomBg() {
	var rc1 = randomColor();
	var rc2 = randomColor();
	body.style.background =
		"linear-gradient(to right, "
		+ rc1
		+ ", "
		+ rc2
		+ ")";

	color1.value = rc1;
	color2.value = rc2;
	console.log("color1" + color1.value);
	console.log("color2" + color2.value);
	css.textContent = body.style.background + ";";
}

generate.addEventListener("click", randomBg);