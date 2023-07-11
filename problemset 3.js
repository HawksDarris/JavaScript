/*
	Code Challenges: Intermediate JavaScript
*/

// reverseArray
const sentence = ['sense.','make', 'all', 'will', 'This'];
const reverseArray = arr => {
	// make a new array to store the reversed input
	let newOrder = [];
	let originalLength = arr.length;
	for (let i = 0; i < originalLength; i++) {
		// pop last item to index 0 of the new array.
		newOrder[i] = arr.pop();
	}
return newOrder;
}

// greetAliens
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
const greetAliens = arr => {
	for (let i = 0; i < arr.length; i++) {
		console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
	}
};

//greetAliens(aliens);

// convertToBaby
// Write your code here:
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
const convertToBaby = arr => {
	let babyArray = [];
	arr.forEach((animal) => babyArray.push('baby ' + animal));
	return babyArray;
}

//smallestPowerOfTwo debug (their code)
const numbers1 = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            // i = 1; // that just keeps resetting to 1, and it is being used as the iterator count, so that's bad.
						otherVar = 1

            while (otherVar < number) {
                  otherVar = otherVar * 2;
            }
            results.push(otherVar);
      }
      return results
}


// declineEverything and acceptEverything
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = arr => arr.forEach(politelyDecline);

const acceptEverything = arr => arr.forEach((veg) => console.log(`Ok, I guess I will eat some ${veg}.`));

//declineEverything(veggies);
//acceptEverything(veggies);


// squareNums
const numbers = [2, 7, 9, 171, 52, 33, 14]
const toSquare = num => num * num

// Write your code here:
const squareNums = arr => arr.map(num => num * num);

//shoutGreetings
const shoutGreetings = arr => arr.map(str => str.toUpperCase()+'!');


// sortYears
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

const sortYears = arr => arr.sort().reverse();

// justCoolStuff
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

const justCoolStuff = (arr1, arr2) => arr1.filter(word => word === arr2[arr2.indexOf(word)]);
/*
	I forgot about the .includes() method, that would probably have been easier, but this also works, so you can see my logic.
*/

// isTheDinnerVegan
const dinner = [{name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}];

const dinner2 = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

const isTheDinnerVegan = arr => arr.every(item => item.source === 'plant')

// sort array of objects by key parameter with number value
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const compareTeeth = (species1, species2) => species1.numTeeth >= species2.numTeeth;

function sortSpeciesByTeeth(arr, prop) {
	return arr.sort((a, b) => a[prop]- b[prop]);
}

// findMyKeys
const findMyKeys = arr => arr.includes('keys') ? arr.indexOf('keys') : -1;

// dogFactory
const dogFactory = (name, breed, weight) => {
	return {
		_name: name,
		_breed: breed,
		_weight: weight,
	
		//get and set name
		get name() {
			return this._name;
		},
		set name(val) {
			this._name = val;				
		},
		get breed() {
			return this._breed;
		},
		set breed(val) {
			this._breed = val;
		},
		get weight() {
			return this._weight
		},
		set weight(val) {
			this._weight = val;
		},
		bark(){
			return `ruff! ruff!`;
		},
		eatTooManyTreats(){
			this._weight ++;
			return null;
		}
	}
}
