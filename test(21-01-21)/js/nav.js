function navUsers() {
	window.location.href='users.html';
}

function navSession() {
	window.location.href='usersession.html';
}

function logout() {

			sessionStorage.clear();
			window.location.href= 'login.html';
	


}

function navDash() {

			
	



	var admin=sessionStorage.getItem('admin');
	
	console.log(admin);
	if (admin) {


		window.location.href= 'dashbord_admin.html';
	}
	else
	{
		window.location.href= 'dashbord_user.html';
	}



	
}
