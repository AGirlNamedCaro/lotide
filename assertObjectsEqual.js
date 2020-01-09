const eqObjects = function(object1, object2) {

  const object1Keys = Object.keys(object1);
  //iterate through one of the objects and compare their keys.
  if (object1Keys.length !== Object.keys(object2).length) {
    return false;
  } else {
  
    for (const key of object1Keys) {
  
      if (!(Array.isArray(object1[key]) && Array.isArray(object2[key]))) {
  
        if (object1[key] !== object2[key]) {
          return false;
        }
  
      } else {
        return eqArrays(object1[key], object2[key]);
 
      }

    }
        
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //adding a js library
  const result = eqObjects(actual, expected);

  if (result === true) {
    //console.log(`Assertion Passed: ${array1} === ${array2}   ✅`);
    return `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}   ✅`;

  } else {

    // console.log(`Assertion Failed: ${array1} !== ${array2}   🛑`);
    return `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}  🛑`;
  }
};

const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };

console.log(assertObjectsEqual(object1,object2));
