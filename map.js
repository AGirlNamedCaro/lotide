/**
 * PROBLEM
 * Create a map function that will:
 * 1.Take in an array
 * 2.Use a callback function
 * 
 * INPUT
 * 1.array
 * 2.callback
 * OUTPUT
 * 1.A new array based on the result of the callback function
 */


const assertArraysEqual = function(actual, expected) {

  const result = eqArrays(actual, expected);

  if (result === true) {
    //console.log(`Assertion Passed: ${array1} === ${array2}   ✅`);
    return `Assertion Passed: ${actual} === ${expected}   ✅`;

  } else {

    // console.log(`Assertion Failed: ${array1} !== ${array2}   🛑`);
    return `Assertion Failed: ${actual} !== ${expected}  🛑`;
  }

};

const eqArrays = function(array1, array2) {

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};


const words = ["ground", "control", "to", "major", "tom"];
const words1 = [];


const map = function(array,callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words1, word => word[0]);

console.log(assertArraysEqual(results1,['g','c','t','m','t']));
console.log(assertArraysEqual(results2,[]));
