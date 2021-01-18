A = { x: 'abc' }
for (x in A){
console.log(A.x);
}


A = {name : 'pritey' }
console.log(A);


let b = 5;

let obj ={
	 //b :9,
	 j : function() {
		return this.b;
	}

};

console.log(obj.j());


var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
console.log(person.fullName());