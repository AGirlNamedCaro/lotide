const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}   ✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}   🛑`);
  }
  
};

let arrayNew = [];

const tail = function(array) {

  for (let i = 0; i < array.length; i++) {
    arrayNew.push(array[i]);
  }

  arrayNew = arrayNew.splice(1);

};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!