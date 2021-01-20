/*document.getElementById('submit').addEventListener('click',()=>{




let n = document.getElementById('name').value;
let e = document.getElementById('email').value;
let d = document.getElementById('date').value;



let array = [n , e , d ];

localStorage.setItem('array', JSON.stringify(array));
// localStorage.setItem('email', e);
// localStorage.setItem('date', d);
});

*/
const person = function(name,email,dateOfBirth){
	this.name = name;
	this.email = email;
	this.dateOfBirth = dateOfBirth;
}
document.getElementById('submit').addEventListener('click',function() {
	let n = document.getElementById('name').value;
	let e = document.getElementById('email').value;
	let d = document.getElementById('date').value;
	const jemish = new person(n,e,d);
	const sumit = new person('Sumit','s@gmail.com','20-20-2020');
	const arrJemish = [];
	arrJemish.push(jemish);
	arrJemish.push(sumit);
	localStorage.setItem('person_pr2',JSON.stringify(arrJemish));
	window.location.href = 't1.html';
});