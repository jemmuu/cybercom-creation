var BMI;

var mark = {
name:'mark',
m:70,
he:1.2,

calBmi: function(){

	BMI= this.m + (this.he*this.he);
	this.bmi=BMI;
	return BMI;

}
}

var John= 
{

name:'John',
m:70,
he:1.5,
calBmi: function(){

	BMI= this.m + (this.he*this.he);
	this.bmi=BMI;
	return BMI;

}

}
John.calBmi();
mark.calBmi();
console.log("Jhon's BMI = "+''+ John.bmi );
console.log("Mark's BMI = "+''+ mark.bmi);
console.log("Is Marks's Highter Than John's?" + '  '+ (mark.bmi> John.bmi));

if (mark.bmi> John.bmi) {

	console.log(mark.name +" BMI Highter Than John's which is " + '  '+ mark.bmi);

}
else if (mark.bmi< John.bmi) {

		console.log(John.name +" BMI Highter Than mark's which is " + '  '+ John.bmi);

}else
{

	console.log('same bmi which is ' + mark.bmi)
}