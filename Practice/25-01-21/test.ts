// ts to javascript practice


// function hello() {
// 	console.log('booom boom boom');
// }

// hello();




//variable typs in javascript,enum , interface  and class


interface Parent{

	 name: string;
	 age: number;
	 username: any;
	 hobby: string[];




}

class testClass implements Parent
{

	name: '';
	 age: 0;
	 username: '';
	hobby: [];


	constructor(name,age,username)
	{
	this.username= username;
	this.name = name;
	this.age = age;

     }



	  funA = () => {

	 	console.log(`name is ${this.name}and age is ${this.age}`);
	 }



}


enum test {

	jemish =1,
	kakadiya=2,
	rameshbhai=3,

}

let b = new testClass('jemish',22,'25967');
let jemish = test.jemish;
console.log(jemish);

console.log(b.name);

b.funA();