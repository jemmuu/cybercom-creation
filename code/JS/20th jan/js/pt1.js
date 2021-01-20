
// task 1 code creating object and fetching keys

let object = {


	name: 'jemmu',
	email: 'a@gmail.com',
	age: 22,
};

var keyBeforeslice = Object.keys(object);

var keys = '<br>';
Object.keys(object).forEach(key=> {keys+= key + '</br>'});

document.getElementById('keys').innerHTML= keys;




                    