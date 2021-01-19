var b = {
	
	a: 12,
	b:23,
}

let c = Object.keys(b);

for(var x in c)
{
	console.log(c[x])
}



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


localStorage.setItem('jemmu',JSON.stringify(jemmu));
localStorage.setItem('smit',JSON.stringify(smit));
localStorage.setItem('sumit',JSON.stringify(sumit));


let table='<tr>';

if (localStorage.jemmu) {

	let jemmu1 = JSON.parse(localStorage.jemmu);

	for(let x in jemmu)
	{
		table+=`<td>${jemmu[x]}</td>`;
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