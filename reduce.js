// Use the built-in `.reduce()` method on arrays to solve all of these problems

// Feel free to copy and paste the code for easy testing.

//1) Turn an array of numbers into a total of all the numbers

function total(arr) {
   return arr.reduce((acc,currentValue) => acc + currentValue + 0);
}

console.log(total([1,2,3])); // 6


//2) Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
   return arr.reduce((acc, initialValue) => acc + initialValue, ``); 
}

console.log(stringConcat([1,2,3])); // "123"


//3) Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
         return arr.reduce((acc, value) => acc + value.voted, 0);
   }
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7


// Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
   return arr.reduce((cost, wish) => cost + wish.price, 0);
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005


//5) Given an array of arrays, flatten them into a single array

function flatten(arr) {
   return arr.reduce((flat, array) => flat.concat(array));
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


// Note: Take a look at Array.concat() to help with this one

//6) Given an array of potential voters, return an object representing the results of the vote

//Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   return arr.reduce((categories, people) => {
      if (people.age >= 18 && people.age <= 25) {
         categories.youth++;
         if (people.voted) {
            categories.youngVotes++;
         }
      }  else if (people.age >= 26 && people.age <= 35) {
         categories.mids++;
         if (people.voted) {
            categories.midVotes++;
         }
      }  else if (people.age >= 36 && people.age <= 55) {
         categories.old++;
         if (people.voted) {
            categories.oldVotes++;
         }
      }
       return categories;

   }, {
      youngVotes: 0,
      youth: 0,
      midVotes: 0,
      oldVotes: 0,
      olds: 0,
   });
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/
