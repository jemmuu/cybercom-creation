


var user  = JSON.parse(sessionStorage.getItem('uname'));

 document.getElementById('uname').innerHTML = user['name'];

var logIntime = new Date().toLocaleString();
var userName= user['name'];


var userDetails= function(name,logintime,logouttime){


	this.name=name;
	this.logintime= logintime;
	this.logouttime=logouttime;


}

var loginDetails= [];


function logout() {

			let logouttime = new Date().toLocaleString();

			let newDetails = new userDetails(userName,logIntime,logouttime);

			loginDetails.push(newDetails);

			localStorage.setItem('loginDetails' ,JSON.stringify(loginDetails));

			console.log(logouttime);
			console.log('here');
	


}
 
