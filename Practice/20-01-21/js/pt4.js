//task 4

function person(name,email,dob) {
	
			this.name =name;
			this.email = email;
			this.dob=dob;


	}




function submitedValue() {


	name = document.getElementById('name').value;
	email = document.getElementById('email').value;
	dob = document.getElementById('dob').value;

	let new_person = new person(name,email,dob);

	let userArray= [];

	if (localStorage.getItem('userAray')) {

     userArray= JSON.parse(localStorage.getItem(('userAray')));

   }

   		userArray.push(new_person);


   		localStorage.setItem('userAray' ,JSON.stringify(userArray));
   		


}