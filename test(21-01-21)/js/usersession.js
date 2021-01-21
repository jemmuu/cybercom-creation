//users session data retrival



 let tableData= `<tr>`;


			if (localStorage.getItem('loginDetails')) {

					
				var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));



					for(cur in loginDetails)
					{
						for(index in loginDetails[cur])
						{

							tableData+=`<td> ${loginDetails[cur][index]} </td>`;
						}

						
						tableData+=`</tr><tr>`;

					}



					document.getElementById('tableData').innerHTML= tableData;
				}