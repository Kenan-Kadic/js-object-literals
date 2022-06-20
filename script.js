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

const abc = [1,2,3,4,5];

for(const item of abc) {
  console.log(item)
  }