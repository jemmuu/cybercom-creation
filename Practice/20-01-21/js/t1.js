
// task 3 from mam's document start


class multiple {
	constructor(name,age,email,pnumber)
	  {
	  	this.name= name;
	  	this.age=age;
	  	this.email=email;
	  	this.pnumber=pnumber;
	  }
}

let jemmu = new multiple('jemish',12,'a@gmail.com',999999);
let smit = new multiple('smit',11,'a@gmail.com',999999);
let sumit = new multiple('sumit',1,'a@gmail.com',999999);

let alla=[jemmu,smit,sumit];



function comparevalues(keys,order='asc') {

	return function innersort(a,b){

	if (!a.hasOwnProperty(keys) || !b.hasOwnProperty(keys)) {
		return 0;
	}

	let compare = a[keys].toString().localeCompare(b[keys]);

	return(

			(order == 'dsc')? (compare * -1) : compare
		);
};

}


console.log(alla.sort(comparevalues('age')));


// task 3 from mam's document end

// task 4 from mam's document start : this page as view.html


// let name = localStorage.getItem('name');
// let email = localStorage.getItem('email');
// let date = localStorage.getItem('date');


// console.log(name);



let table='<tr>';

if (localStorage.array) {

	let jemmu1 = JSON.parse(localStorage.getItem('person_pr2'));
	for (let cur in jemmu1){
		for (let field in jemmu1[cur]) {
			table+=`<td>${jemmu1[cur][field]}</td>`;
		}
		table+='</tr><tr>';
	}

/*
	for(let x in jemmu1)
	{
		table+=`<td>${jemmu1[x]}</td>`;
	}*/

	table+='</tr>'
}

document.querySelector("#table").innerHTML=table;

// task 4 from mam's document end : this page as view.html

/*[jemish{'jemish'}], */

// const person = function (name,age,email,mobileNumber) {
// 	this.name = name,
// 	this.age = age,
// 	this.email = email,
// 	this.mobileNumber = mobileNumber
// };

// const smit = new person('Smit',21,'smitshah22050602@gmail.com',8849364239);
// const jemish = new person('Jemish',50,'jemish@gmail.com',1111111111);
// const sumit = new person('Sumit',30,'sumit@gmail.com',9999999999);
// const jinay = new person('Jinay',10,'jinay@gmail.com',8888888888);

// let arrPerson = [];
// arrPerson.push(smit);
// arrPerson.push(jemish);
// arrPerson.push(sumit);

// var result = '<tr>';
// localStorage.setItem("practice_2",JSON.stringify(arrPerson));
// if(localStorage.practice_2){
// 	let practice_2JsonDecode = JSON.parse(localStorage.practice_2);
// 	for (let cur in practice_2JsonDecode) {
// 		for(let field in practice_2JsonDecode[cur]){
// 			result += `<td>${practice_2JsonDecode[cur][field]}</td>`;
// 		}
// 		result += '</tr><tr>';
// 	}
// }

// document.querySelector('#result').innerHTML = result;