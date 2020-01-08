const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}   ✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}   🛑`);
  }
  
};

/**
 * PROBLEM
 * Create a function that takes in an object and a value.
 * The function should scan the object & return the first key -- which contains the given value
 * If there is no key with the given value found, it should return undefined
 */

const findKeyByValue = function(object, value) {

  for (const items in object) {
   

    if (object[items] === value) {

      return items;
    }
  }

  return undefined;

};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);