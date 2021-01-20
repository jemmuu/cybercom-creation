// task 3

function compare(key , order= 'asc') {

	return function compareBetweenobject(fstOb,secOb)
	{
		if (!fstOb.hasOwnProperty(key) || !secOb.hasOwnProperty(key)) {
		return 0;
	}

	let comparision = fstOb[key].toString().localeCompare(secOb[key]);

		return (
			(order=='dsc')? comparision * -1 : comparision

			);
};
}

var userAray= JSON.parse(localStorage.getItem(('userAray')));

var sortArray=userAray.sort(compare('age'));

console.log(sortArray);