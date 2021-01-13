var billAmount =[124,48,248]

// function for tip calculation
function tipCal(amount) {
	var tip;

	if (amount<50) {

		tip = amount * 0.2;
	}
	else if (amount <200) {

		tip=amount*0.15;
	}
	else if (amount >200) {

		tip = amount*0.1;
	}

	return tip;
}

var tip = [],totalBill=[];

for (var i = 0; i < billAmount.length; i++) {
	
	 tip[i]=tipCal(billAmount[i]);
	 totalBill[i]= billAmount[i] + tip[i];
}

for (var i = 0; i < billAmount.length; i++) {

alert("bill's tip is --" + tip[i] + "total bill amount with tip is --"+ totalBill[i])
console.log(tip[i].toFixed(2)  ,  totalBill[i]);
}
