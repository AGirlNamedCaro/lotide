/**
 * PROBLEM
 * Create a function that will keep collecting items in a separate array until
 * the callback function provides a truthy value
 * 
 * INPUT:
 * data
 * callback function
 * 
 * OUTPUT:
 * An array with falsy values UNTIL the callback function returns a truthy
 * 
 */

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



const takeUntil = (data,callback) => {
  let newData = [];
  for(const items of data) {
    
    const callbackResult = callback(items);
    if(callbackResult) {
      break;
    }
    newData.push(items);
  }

  return newData;
  
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; //[ 1, 2, 5, 7, 2 ]
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]; //[ 'I\'ve', 'been', 'to', 'Hollywood' ]
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));
