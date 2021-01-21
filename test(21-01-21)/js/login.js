


//navigation function for register btn

function navFun() {

	window.location.href='Registeration.html';
	
}


//login admin to dashboard


function loginCheck() {
	
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let adminData = JSON.parse(localStorage.getItem('adminData'));
	let adminPass=adminData.password;
	let adminEmail=adminData.email;
	// console.log(adminPass);
	// console.log(adminEmail);

	if (email == adminEmail && password == adminPass) {


		window.location.href= 'dashbord_admin.html';
	}
}