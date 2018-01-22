function currency(face_value, money_type) {
this.face_value = face_value;
this.money_type = money_type;
}

var myatm = new Array();

var note_1000 = new currency(1000, "note");
myatm.push(note_1000);
var note_500 = new currency(500, "note");
myatm.push(note_500);
var note_200 = new currency(200, "note");
myatm.push(note_200);
var note_100 = new currency(100, "note");
myatm.push(note_100); 
var note_50 = new currency(50, "note");
myatm.push(note_50);

var coin_20 = new currency(20, 40);
myatm.push(coin_20);
var coin_10 = new currency(10, 20);
myatm.push(coin_10);
var coin_5 = new currency(5, 50);
myatm.push(coin_5);
var coin_2 = new currency(2, 30);
myatm.push(coin_2);
var coin_1 = new currency(1, 10);
myatm.push(coin_1);

var eachCurrency_num = new Array();

var tb;
var td;
var td_icon;
var tr;
var display;

function display_value() {
	var loc = location.href;
	return loc.split("=")[1];
	
}

function update() {
	display = display_value();
	for (i=0; i<myatm.length; i++){
		num = Math.floor(display / myatm[i].face_value);
		eachCurrency_num.push([myatm[i].face_value, myatm[i].money_type, num]);
		display = display % myatm[i].face_value
	};
	
	for (i=0; i<eachCurrency_num.length; i++) {
		if (eachCurrency_num[i][2] != 0) {
			if (eachCurrency_num[i][1] == "note") {
				tb = document.getElementById("note");
				td = document.createElement("td");
				td_icon = document.createElement("td");
				tr = document.createElement("tr");
				td.innerHTML = "<font color=\"#fff\">" + eachCurrency_num[i][2] + " x " + eachCurrency_num[i][0] + "</font>";
				td_icon.innerHTML = '<img src="icons/note.png" height="40"/>';
				tr.appendChild(td_icon)
				tr.appendChild(td);
				tb.appendChild(tr);
			}
			else if (eachCurrency_num[i][1] > 20) {
				tb = document.getElementById("big_coin");
				td = document.createElement("td");
				td_icon = document.createElement("td");
				tr = document.createElement("tr");
				td.innerHTML = "<font color=\"#fff\">" + eachCurrency_num[i][2] + " x " + eachCurrency_num[i][0] + "</font>";
				td_icon.innerHTML = '<img src="icons/coin.png" height="40"/>';
				tr.appendChild(td_icon)
				tr.appendChild(td);
				tb.appendChild(tr);
			}
			else {
				tb = document.getElementById("small_coin");
				td = document.createElement("td");
				td_icon = document.createElement("td");
				tr = document.createElement("tr");
				td.innerHTML = "<font color=\"#fff\">" + eachCurrency_num[i][2] + " x " + eachCurrency_num[i][0] + "</font>";
				td_icon.innerHTML = '<img src="icons/coin.png" height="40"/>';
				tr.appendChild(td_icon)
				tr.appendChild(td);
				tb.appendChild(tr);
			}
	
		}
	};
	
}

