
function chkAdmin(argument) {
	// body...

	
if (localStorage.adminData) {

	alert('Admin already registered!');
	document.getElementById('register_btn').disabled = true;
}
}

// case of new admin profile

function adminReg() {

var adminData={

		 name : document.getElementById('name').value,
		 email : document.getElementById('email').value,
		 password : document.getElementById('password').value,
		 con_password : document.getElementById('con_password').value,
		 city : document.getElementById('city').value,
		 state : document.getElementById('state').value,


}

localStorage.setItem('adminData', JSON.stringify(adminData));




window.location.href='login.html';
}