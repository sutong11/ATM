/**
 * 
 */


document.getElementById("del").addEventListener("click", function() {
	var v = Math.floor(document.getElementById("display").value/10);
	if (v == 0){
		document.getElementById("display").value = "";
	}
	else {
		document.getElementById("display").value = v;
	}
});
function get(value) {
	//document.getElementById("display").value += value;
	var v = document.getElementById("display").value;
	
	//console.log("%d",v.length);
	
	if (v == "0" && value == 0) {
		document.getElementById("display").value = "0";
	}
	else if (v == "0" && value != 0) {
		document.getElementById("display").value = value;
	}
	else if (v.length < 12) {
		document.getElementById("display").value += value;
	}
	else {
		document.getElementById("display").value = v.substring(0,12);
	};
	
};









	