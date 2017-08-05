//constant can't be changed once defined

const MYCONSTANT = 5;
console.log(MYCONSTANT);

//let is a block scope variable
// If you want to limit the scope of a variable to just one code block, use let.


function logScope() {
	let localVar = 2;

	if (localVar) {
		let localVar = "I'm different!";
		console.log("nested localVar: ", localVar);
	}

	console.log("logScope localVar: ", localVar);

}

logScope();