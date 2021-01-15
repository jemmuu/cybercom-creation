document.getElementById("resultbtn").onclick= fibo;

var n1 = 0, n2 = 1, n3;
var p =[];

function fibo() {
	var l= document.getElementById('length').value;

	for (var i = 1; i <= l; i++) 
	{
	 	

    
   
	p[i]=n1;
    n3 =  n1 + n2;
    n1 = n2;
    n2 = n3;
	}
	document.getElementById("fio").innerHTML = "<p>"+p +"</p>"
}