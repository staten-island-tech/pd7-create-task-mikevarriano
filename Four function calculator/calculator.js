

function add() {
	var num1 = Number(document.getElementById("input1").value);
	var num2 = Number(document.getElementById("input2").value);
	var result = num1 + num2;
	document.getElementById("result").value = result;
}

function subtract() {
	var num1 = Number(document.getElementById("input1").value);
	var num2 = Number(document.getElementById("input2").value);
	var result = num1 - num2;
	document.getElementById("result").value = result;
}

function multiply() {
	var num1 = Number(document.getElementById("input1").value);
	var num2 = Number(document.getElementById("input2").value);
	var result = num1 * num2;
	document.getElementById("result").value = result;
}

function divide() {
	var num1 = Number(document.getElementById("input1").value);
	var num2 = Number(document.getElementById("input2").value);
	var result = num1 / num2;
	document.getElementById("result").value = result;
}
