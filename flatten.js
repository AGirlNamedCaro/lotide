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

/**
 * PROBLEM
 * Create a function that will take in an array within arrays
 * and flatten it
 *
 * BREAKDOWN
 * 1.Take in an argument
 * 2.Determine wether the argument has multiple arrays
 * 3.Combine all of them into one array
 *
 * 1.Create a function called flatten that takes in an argument
 * 2.Determine wether the argument has multiple arrays
 *  2.1 if yes,use cancat to join them together
 *  2.3 else, push onto new array
 */

const flatten = function(data) {
  let extraArrays = [];
  let test = [];



  for (let i = 0; i < data.length; i++) {
    if (Array.isArray(data[i]) === true) {
      extraArrays = data[i];
      for (let x = 0; x < extraArrays.length; x++) {
        test.push(extraArrays[x]);
      }
     

    } else {
      test.push(data[i]);
    }
   
  }

  return test;
  
};

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6])); // => [1, 2, 3, 4, 5, 6]
console.log(assertArraysEqual(flatten([1,["2"]]),[1,"2"]));