
let adminData = JSON.parse(localStorage.getItem('adminData'));
let adminName=adminData.name;

document.getElementById('uname').innerHTML= adminName;



function navUsers() {
	window.location.href='users.html';
}

