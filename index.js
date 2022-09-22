//console.log("activity17");
let number = Number(prompt("Please enter a number: "));
//3. Create a variable getCube and use the exponent operator to compute for the cube of a number. (A cube is any number raised to 3) 
const getCube = number ** 3;
// 4. Using Template Literals, print out the value of the getCube variable with a message of The cube of <num> is… 
let message = `The cube of ${number} is ${getCube}`
console.log(message);
 //5. Create a variable address with a value of an array containing details of an address. 
 const address = ["258", "Washington Ave NW", "California", "90011"]
 const [houseNumber, street, state, zipCode] = address;
 //6. Destructure the array and print out a message with the full address using Template Literals. 
console.log(`I live at ${houseNumber} ${street}, ${state} ${zipCode}`);
// 7. Create a variable animal with a value of an object data type with different animal details as it’s properties. 
const animal = {
	name: "Lolong",
	type: "saltwater crocodile",
	weight: 1075,
	size: "20 ft 3 in"
}
const{name, type, weight, size} = animal;
// 8. Destructure the object and print out a message with the details of the animal using Template Literals. 
console.log(`${name} was a ${type}. He weighed at ${weight}kgs with a measurement of ${size}.`)
//9. Create an array of numbers. 
const arrayOfNumbers = [1, 2, 3, 4, 5];
//10. Loop through the array using forEach, an arrow function and using the implicit return statement to print out the numbers. 
arrayOfNumbers.forEach(num=>{
	console.log(num);
});

//11. Create a variable reduceNumber and using the reduce array method and an arrow function console log the sum of all the numbers in the array. 
const reduceNumber = arrayOfNumbers.reduce((x,y) => x + y);
console.log(reduceNumber)

// 12. Create a class of a Dog and a constructor that will accept a name, age and breed as it’s properties. 
class Dog{
	constructor(name, age, breed){
		this.name = name;
		this.age = age;
		this.breed = breed;
	}
}
//13. Create/instantiate a new object from the class Dog and console log the object. 
const dog1 = new Dog();
dog1.name = "Frankie";
dog1.age = 5;
dog1.breed = "Miniature Dachshund";

console.log(dog1);
