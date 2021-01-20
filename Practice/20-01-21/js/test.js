
// task 1 from mam's document start


var b = {
	
	a: 12,
	b:23,
}

let c = Object.keys(b);

for(var x in c)
{
	console.log(c[x])
}

// task 1 from mam's document end



// task 2 from mam's document start

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
let smit = new multiple('smit',12,'a@gmail.com',999999);
let sumit = new multiple('sumit',12,'a@gmail.com',999999);

//let alla=[jemmu,smit,sumit];

localStorage.setItem('jemmu1',JSON.stringify(jemmu));
localStorage.setItem('smit',JSON.stringify(smit));
localStorage.setItem('sumit',JSON.stringify(sumit));
//localStorage.setItem('alla',JSON.stringify(alla));

let table='<tr>';

if (localStorage.jemmu1) {

	let jemmu1 = JSON.parse(localStorage.jemmu1);

	for(let x in jemmu1)
	{
		table+=`<td>${jemmu1[x]}</td>`;
	}

	table+='</tr><tr>'
}

if (localStorage.smit) {

	let smit = JSON.parse(localStorage.smit);

	for(let x in smit)
	{
		table+=`<td>${smit[x]}</td>`;
	}

	table+='</tr><tr>'
}
if (localStorage.sumit) {

	let sumit = JSON.parse(localStorage.sumit);

	for(let x in sumit)
	{
		table+=`<td>${sumit[x]}</td>`;
	}

	table+='</tr>'
}

document.querySelector("#table").innerHTML=table;



// task 2 from mam's document end
