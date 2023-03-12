
		function add() {
			var numbersarray = [Number(document.getElementById("firstnumber").value), Number(document.getElementById("secondnumber").value)];
			var result = numbersarray[0] + numbersarray[1];
			document.getElementById("result").value = result;
			if (result >= 0) {
				document.getElementById("result").value = result;
			} else {
				document.getElementById("result").value = "POSITIVE RESULTS ONLY!";
			}
		}

		function subtract() {
			var numbersarray = [Number(document.getElementById("firstnumber").value), Number(document.getElementById("secondnumber").value)];
			var result = numbersarray[0] - numbersarray[1];
			document.getElementById("result").value = result;
			if (result >= 0) {
				document.getElementById("result").value = result;
			} else {
				document.getElementById("result").value = "POSITIVE RESULTS ONLY!";
			}
		}

		function multiply() {
			var numbersarray = [Number(document.getElementById("firstnumber").value), Number(document.getElementById("secondnumber").value)];
			var result = numbersarray[0] * numbersarray[1];
			document.getElementById("result").value = result;
			if (result >= 0) {
				document.getElementById("result").value = result;
			} else {
				document.getElementById("result").value = "POSITIVE RESULTS ONLY!";
			}
		}

		function divide() {
			var numbersarray = [Number(document.getElementById("firstnumber").value), Number(document.getElementById("secondnumber").value)];
			var result = numbersarray[0] / numbersarray[1];
			document.getElementById("result").value = result;
			if (result >= 0) {
				document.getElementById("result").value = result;
			} else {
				document.getElementById("result").value = "POSITIVE RESULTS ONLY!";
			}
		}
	

		