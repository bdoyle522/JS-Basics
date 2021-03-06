//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
	if(name == 'Tyler'){return true;}
	return false;
}

var x = isTyler(name);
console.log(x);


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(){
	var y = prompt('What is your name');
	return y;
}
console.log(getName());


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(){
	var names = getName();
	alert('welcome ' + names);
}

welcome();


//Next problem




//What is the difference between arguments and parameters?

//*A parameter is set in a function defintion, while an argument is what is passed to said function.*//


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


//false, null, undefined, 0, NaN, ' ', document.all[1]
//if()



//Next Problem



//Create a function called myName that returns your name

function myName(){
	return 'Brendan';
}

//Now save the function definition of myName into a new variable called newMyName

var myNewName = myName();

//Now alert the result of invoking newMyName

alert(myNewName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
	return(function(){return myNewName
	})();
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn
console.log(innerFn);
