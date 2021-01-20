// task 4 part 2

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