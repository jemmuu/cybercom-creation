


var user  = JSON.parse(sessionStorage.getItem('uname'));

 document.getElementById('uname').innerHTML = user['name'];

var logIntime = new Date().toLocaleString();
var userName= user['name'];
console.log(userName);
var bdate=user['dob'];
var temp_date = new Date(bdate);
var bmonth = temp_date.getMonth() +1;
var bday = temp_date.getDate();

var currdate=new Date();
var currMonth = currdate.getMonth() +1;
var curday = currdate.getDate();

if (bmonth == currMonth && curday==bday) {


	document.getElementById('baday').innerHTML= `Happy Birthday ${userName}`;
}


var userDetails= function(name,logintime,logouttime){


	this.name=name;
	this.logintime= logintime;
	this.logouttime=logouttime;


}

var loginDetails= [];

document.getElementById("logout").addEventListener("click", function(){
  let logouttime = new Date().toLocaleString();

			let newDetails = new userDetails(userName,logIntime,logouttime);

			loginDetails.push(newDetails);

			localStorage.setItem('loginDetails' ,JSON.stringify(loginDetails));

			console.log(logouttime);
			console.log('here');
});


 
