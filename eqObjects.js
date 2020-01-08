const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}   ✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}   🛑`);
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


/**
 * PROBLEM
 * Create a function that will take in 2 objects & will 
 * return true or false based on perfect match
 */

 // Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {

  //iterate through one of the objects and compare their keys.

  if(Object.keys(object1).length != Object.keys(object2).length ) {
    return false;
  }
  else {

    for(const keys of Object.keys(object1)) {
      if(object1[keys] !== object2[keys]) {
        return false;
      }
    }
    return true;

  }
    
  
};


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// let result = eqObjects(ab, ba); // => true
// assertEqual(result, true)
// const abc = { a: "1", b: "2", c: "3" };
//   result = eqObjects(ab, abc); // => false
//  assertEqual(result, false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
let result = eqObjects(cd, dc); // => true
assertEqual(result, true);


const cd2 = { c: "1", d: ["2", 3, 4] };
result = eqObjects(cd, cd2); // => false
assertEqual(result, false);
