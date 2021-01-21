var user = function (name,email,password,dob) {
		this.name= name;
	  	this.password=password;
	  	this.email=email;
	  	this.dob=dob;
}



//get data from users.html on add user
function addUsers() {
		
		let name = document.getElementById('name').value;
		let email = document.getElementById('email').value; 
		let password = document.getElementById('password').value;
		let dob = document.getElementById('dob').value;


		var allUsers=[];

		let newUser= new user(name,email,password,dob);

		if (localStorage.getItem('userAray')) {

			 allUsers= JSON.parse(localStorage.getItem(('userAray')));

			}


		allUsers.push(newUser);

		localStorage.setItem('userAray' ,JSON.stringify(allUsers));

		let tableData= `<tr>`;
let tableHead=`<tr>`;


if (localStorage.getItem('userAray')) {

		
	var userAray= JSON.parse(localStorage.getItem(('userAray')));


		for(cur in userAray)
		{
			for(index in userAray[cur])
			{

				tableData+=`<td> ${userAray[cur][index]} </td>`;
			}

			tableData+=`</tr><tr>`;

		}



		document.getElementById('tableData').innerHTML= tableData;
		



}



}