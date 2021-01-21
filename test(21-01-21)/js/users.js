// object for new user
var user = function (name,email,password,dob,age) {
		this.name= name;
	  	this.password=password;
	  	this.email=email;
	  	this.dob=dob;
	  	this.age=age;
}

//load old users in table

if (localStorage.userAray) {

	 let tableData= `<tr>`;


			if (localStorage.getItem('userAray')) {

					
				var userAray= JSON.parse(localStorage.getItem(('userAray')));


					for(cur in userAray)
					{
						
						for(index in userAray[cur])
						{

							tableData+=`<td> ${userAray[cur][index]} </td>`;
						}
						tableData+=`<td><a onclick='editRec(${cur})'>Edit</a> &nbsp <a onclick='delRec(${cur})'>Delete</a>  </td>`
						tableData+=`</tr><tr>`;

					}



					document.getElementById('tableData').innerHTML= tableData;
					



}
}

//loading old data of user feature end here


//get data from users.html on add user
function addUsers() {
		
		let name = document.getElementById('name').value;
		let email = document.getElementById('email').value; 
		let password = document.getElementById('password').value;
		let dobFull= new Date(document.getElementById('dob').value);
		let dob= dobFull.toLocaleDateString("en-US");
		let today = new Date();
		let age = today.getFullYear() - dobFull.getFullYear();


		var allUsers=[];

		let newUser= new user(name,email,password,dob,age);

		if (localStorage.getItem('userAray')) {

			 allUsers= JSON.parse(localStorage.getItem(('userAray')));

			}


		allUsers.push(newUser);

		localStorage.setItem('userAray' ,JSON.stringify(allUsers));

		    let tableData= `<tr>`;


			if (localStorage.getItem('userAray')) {

					
				var userAray= JSON.parse(localStorage.getItem(('userAray')));


					for(cur in userAray)
					{
						for(index in userAray[cur])
						{

							tableData+=`<td> ${userAray[cur][index]} </td>`;
						}

						tableData+=`<td><a onclick='editRec(${cur})'>Edit</a> &nbsp <a onclick='delRec(${cur})'>Delete</a>  </td>`
						tableData+=`</tr><tr>`;

					}



					document.getElementById('tableData').innerHTML= tableData;
					



}



}

//retrival of data and present end here


// function for deleting record of user

function delRec(index) {

		var userAray1= JSON.parse(localStorage.getItem(('userAray')));

		

		userAray1.splice(index,1);
		
		console.log(userAray1);
		localStorage.setItem('userAray' ,JSON.stringify(userAray1));
		window.location.href='users.html';
}

// delete record end here


// edit record start here


function editRec(index) {

		var userAray1= JSON.parse(localStorage.getItem(('userAray')));



		for(keys in userAray1[index])
		{

			if(keys == 'age')
			{
				continue;
			}

			if(keys == 'dob')
			{
				let dob = new Date(userAray1[index][keys]);
			 function convertDate(dobF) {
						  var yyyy = date.getFullYear().toString();
						  var mm = (date.getMonth()+1).toString();
						  var dd  = date.getDate().toString();

						  var mmChars = mm.split('');
						  var ddChars = dd.split('');

						  return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
						}
				
				document.getElementById(keys).value = dob;
				continue;
			}


			document.getElementById(keys).value = userAray1[index][keys];
			




		}

}

