


var user  = JSON.parse(sessionStorage.getItem('uname'));

 document.getElementById('uname').innerHTML = user['name'];

var logIntime = new Date().toLocaleString();
var userName= user['name'];


var userDetails= function(name,logintime,logouttime){


	this.name=name;
	this.logintime=lofintime;
	this.logouttime=logouttime;


}

var logindetails= [];
function logout() {
	


}
 
