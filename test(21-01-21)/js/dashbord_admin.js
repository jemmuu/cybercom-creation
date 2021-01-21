let userAge = function(userArr){
	let tempChild = 0;
	let tempAdult = 0;
	let tempSenior = 0;
	for (let cur in userArr){
		if(userArr[cur]['age'] < 18 ){
			tempChild += 1;
		}else if(18 <= userArr[cur]['age'] < 50){
			tempAdult += 1;
		}else{
			tempSenior += 1;
		}
	}
	return [tempChild,tempAdult,tempSenior];
}

let userAgeArr = userAge(JSON.parse(localStorage.getItem('userAray')));
document.getElementById('under18').textContent = userAgeArr[0];
document.getElementById('between18to50').textContent = userAgeArr[1];
document.getElementById('above50').textContent = userAgeArr[2];
//console.log(userAgeArr[0]);

let adminData = JSON.parse(localStorage.getItem('adminData'));
let adminName=adminData.name;

document.getElementById('uname').innerHTML= adminName;



function navUsers() {
	window.location.href='users.html';
}

function navSession() {
	window.location.href='usersession.html';
}



var userAray = JSON.parse(localStorage.getItem('userAray'));
let tableData= `<tr>`;
for(cur in userAray)
{

	    var bdate=userAray[cur]['dob'];
	   // console.log(userAray[cur]['name']);
		var temp_date = new Date(bdate);
		var bmonth = temp_date.getMonth() +1;
		var bday = temp_date.getDate();

		var currdate=new Date();
		var currMonth = currdate.getMonth() +1;
		var curday = currdate.getDate();

		if (bmonth == currMonth && curday==bday)
		{
			tableData+=`<td> ${userAray[cur]['name']}  Happy birth day</td>`;
			tableData+=`</tr><tr>`;
		}

}

document.getElementById('tableData').innerHTML= tableData;


