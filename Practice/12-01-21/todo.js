// checking hoisting 

console.log(jem);
var jem = 'awsome';
console.log(jem);
jem=1999;


console.log(calAge(jem));

function calAge(year)
 {
	// calculating AGE

	return(2021- year);
}

// scope of variable


var a=1;
abb();

function abb() {
	// dummy
	var b=2;
	bcc();
	function bcc() {
		// dummy

		console.log(a,b);
	}
}
bccc(); // will throw error 
function bccc() {
		// dummy

		//console.log(a,b);
	}






//this keyword 



var jemmu={
			name: 'jemmu',
			bapkanam:'Rameshbhai',
			birthyr:1999,
			dumm: 'damp',
			jaujf: 'dsfr',

			jm: function() {
				// body...
				console.log(this);
				//console.log(2021-this.birthyr);
				return(2021-this.birthyr);
			},
				};

//jemmu.jm();


// object properties & methods


var jemish={
			name: 'jemish',
			bapkanam:'Rameshbhai',
			birthyr:1990,
			dumm: 'damp',
			jaujf: 'dsfr',

			
				};

 jemish.jm=jemmu.jm;
jemmu.age= jemmu.jm();
var b = jemish.jm();


console.log(jemish,b);



// loop

var jemi = [1,'j','e','m','i','s','h',25];

for (var i = 0; i < jemi.length; i++) {
	//console.log(jemi[i]);
}

var j=0;
while(j < jemi.length)
{
   //alert(jemi[j]);
   j++;
}


// break continue

for (var i = 0; i < jemi.length; i++) {

	if (typeof jemi[i] !== 'number') {
		continue;
	}
	console.log(jemi[i]);
}

var j=0;
while(j < jemi.length)
{ 
	if (typeof jemi[j] !== 'number') {
		break;
	}
   console.log(jemi[j]);
   j++;
}

