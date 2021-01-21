


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

		sessionStorage.setItem('admin', 'true');
		window.location.href= 'dashbord_admin.html';
	}



	let userData = JSON.parse(localStorage.getItem('userAray'));
	//let adminPass=adminData.password;
	//let adminEmail=adminData.email;
	//console.log(userData);
	for(cur in userData)
					{
						// let emailMatch = 0;
						// for(index in userData[cur])
						// {

						// 	if (index == 'email') {

						// 		let userEmail = userData[cur][index];
						// 		if (userEmail == email) {

						// 			emailMatch = 1;

						// 		}
						// 	}

						// 	if (index == 'password') {

						// 		let user = userData[cur][index];
						// 		if (userEmail == email) {

						// 			emailMatch = 1;

						// 		}
						// 	}

						// }						}
						let userEmail = userData[cur]['email'];
						let userPass = userData[cur]['password'];
						let userName= userData[cur]['name'];
						let email = document.getElementById('email').value;
						let password = document.getElementById('password').value;
						//console.log(userEmail);
						if (email == userEmail && password == userPass) {

								sessionStorage.setItem("uname",JSON.stringify(userData[cur]));
								
								//console.log(userName);
								window.location.href= 'dashbord_user.html';
	                      }

						
					}

}