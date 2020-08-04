//Use the built-in `.map()` method on arrays to solve all of these problems

//Feel free to copy and paste the function and tests in this assignment.

// Make an array of numbers that are doubles of the first array


function doubleNumbers(arr){
  // your code here
	return arr.map(n => n * 2);
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


// Take an array of numbers and make them strings

function stringItUp(arr){
  return arr.map(element => element.toString());
  // your code here
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]



// Capitalize each of an array of names

function capitalizeNames(arr){
    return arr.map(name => {
        const lowerCase = name.toLowerCase();
        const firstLetterLowerCase = lowerCase[0].toUpperCase();
        return `${firstLetterLowerCase}${lowerCase.slice(1)}`;
    }
    )}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]



// Make an array of strings of the names

function namesOnly(arr){
  return arr.map(people => people.name);
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
  },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// Make an array of strings of the names saying whether or not they can go to The Matrix**

function makeStrings(arr){
  return arr.map(people => {
      if (people.age > 18) {
          return `${people.name} can go to the Matrix`;
      } else {
          return `${people.name} is underage!`
      }
  })
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]


// Make an array of the names in `h1`s, and the ages in `h2`s**

function readyToPutInTheDOM(arr){
  // your code here
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]