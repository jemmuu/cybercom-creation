//users session data retrival



 let tableData= `<tr>`;


			if (localStorage.getItem('sessionData')) {

					
				var sessionData = JSON.parse(localStorage.getItem(sessionData));



					for(cur in sessionData)
					{
						for(index in sessionData[cur])
						{

							tableData+=`<td> ${sessionData[cur][index]} </td>`;
						}

						
						tableData+=`</tr><tr>`;

					}



					document.getElementById('tableData').innerHTML= tableData;