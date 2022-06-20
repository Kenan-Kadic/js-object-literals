'use strict';

  const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // how outside objects were added before ES6
  // openingHours: openingHours

  // ES6 fixed the code above to be simpler

  openingHours,


  // there is also a better way to write methods
  // instead of writing order: function(parameter1, parameter2) {stuff} you can write
  // order(startIndex, mainIndex){ stuff }

  // you no longer need the word function and you don't need the colon
};

// OBJECT LITERALS

// How you can write an object in a new way

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// show me that for of loop you learned ealier

const abc = ['A','B','C','D','E'];

for(const item of abc) {
  console.log(item)
  }

// for of loop with indexes

for(const [i, v] of abc.entries()){
  console.log(i,v)
}

// show me how you destruct an array like you learned

const array1 = ['Array Part 1', 'Array Part 2', 'Array Part 3']

const [a,b,c] = array1
console.log(a);
console.log(b);
console.log(c);

// show me how you use the spread operator

console.log(...array1)

// partial destructure whre you only take 2 items instead of all 3

let [part1, ,part3] = array1;
console.log(part1);
console.log(part3);

// SHOW ME how you destructure objects

const person = {
  name: 'Sara',
  age: 25,
  gender: 'female'
}

let {name, age, gender} = person;

console.log(name);
console.log(age);
console.log(gender);

// how about destructure just parts of an object

const person2 = {
  name2: 'Ken',
  age2: 23,
  gender2: 'male'
}

const {name2, gender2} = person2;
console.log(name2);
console.log(gender2);