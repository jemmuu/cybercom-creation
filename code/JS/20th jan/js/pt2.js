// task 2 creating multiple object and storing it in a localstorage

function person(name,age,email,tel_num) {
	
			this.name =name;
			this.email = email;
			this.age= age;
			this.tel_num= tel_num;


	}


let jemish = new person('jemmu', 22,'a@gm.com',898569856);
let jem = new person('jmmu', 21,'a@gm.com',898569856);
let jemi = new person('jemm', 11,'a@gm.com',898569856);
let jemis = new person('jemu',77,'a@gm.com',898569856);


let arrayAllperson=[];

if (localStorage.getItem('userAray')) {

 arrayAllperson= JSON.parse(localStorage.getItem(('userAray')));

}

arrayAllperson.push(jemish);
arrayAllperson.push(jem);
arrayAllperson.push(jemi);
arrayAllperson.push(jemis);

localStorage.setItem('userAray' ,JSON.stringify(arrayAllperson));




console.log(JSON.parse(localStorage.getItem(('userAray'))));

let tableData= `<tr>`;
let tableHead=`<tr>`;


if (localStorage.getItem('userAray')) {

		
	var userAray= JSON.parse(localStorage.getItem(('userAray')));

		for(cur in userAray)
		{
			for(index in userAray[cur])
			{

				tableData+=`<th> ${index} </th>`;
			}

			tableData+=`</tr>`;
			break;

		}


		for(cur in userAray)
		{
			for(index in userAray[cur])
			{

				tableData+=`<td> ${userAray[cur][index]} </td>`;
			}

			tableData+=`</tr><tr>`;

		}



		document.getElementById('tableData').innerHTML= tableData;
		document.getElementById('tableHead').innerHTML= tableHead;



}


// task end here