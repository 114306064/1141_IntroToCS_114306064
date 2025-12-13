var count = 0;
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
	var math = parseFloat(document.getElementById("mathInput").value);
	var eng = parseFloat(document.getElementById("engInput").value);

	if (isNaN(math) || isNaN(eng)) {
		alert("Please enter both grades");
		return;
	}
	count++;
	var avg = ((math + eng) / 2).toFixed(2);

	var tableBody = document.getElementById("tableBody");
	var row = tableBody.insertRow(-1);

	row.insertCell(0).innerHTML = count;
	row.insertCell(1).innerHTML = math;
	row.insertCell(2).innerHTML = eng;
	row.insertCell(3).innerHTML = avg;

	updateColumnAverages();

	document.getElementById("mathInput").value = "";
	document.getElementById("engInput").value = "";
})

function updateColumnAverages() {
	var tableBody = document.getElementById("tableBody");
	var rows = tableBody.rows;

	var mathSum = 0;
	var engSum = 0;
	var avgSum = 0;

	for (var i = 0; i < rows.length; i++) {
		mathSum += parseFloat(rows[i].cells[1].innerHTML);
		engSum += parseFloat(rows[i].cells[2].innerHTML);
		avgSum += parseFloat(rows[i].cells[3].innerHTML);
	}

	var count = rows.length;
	document.getElementById("mathAvg").innerHTML = (mathSum / count).toFixed(2);
	document.getElementById("engAvg").innerHTML = (engSum / count).toFixed(2);
	document.getElementById("overallAvg").innerHTML = (avgSum / count).toFixed(2);
}



