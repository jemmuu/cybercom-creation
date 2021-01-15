

//geting value from passfield by adding event
document.getElementById('Password').addEventListener('keyup',copy)

//function for the copying password to hidden field
function copy() {
	var whole_password='';
	var temp='';

	var pass=document.getElementById('Password').value;
	//var pass_length=length.pass;
	var password_letter=pass.charAt(pass.length-1);
	whole_password=document.getElementById('ogpass').value;
	whole_password += password_letter;
	console.log(whole_password);
	document.getElementById('ogpass').value=whole_password;
	var specialchar_string='?'.repeat(pass.length);
	document.getElementById('Password').value= specialchar_string;


}