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

const middle = function(array) {
  let array1 = [];
  let sum = 0;
  let result = 0;
  let midIndex;
  let midIndex2;

  if (array.length === 1 || array.length === 2) {
    return array1;
  } else if (array.length % 2 !== 0) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    result = sum / array.length;
    array1.push(result);
    return array1;
  } else {

    midIndex = Math.floor(array.length / 2);
    array1.push(midIndex);
    
    for (let i = 0; i < array.length; i ++) {
      if (midIndex === array[i]) {
        midIndex2 = array[i + 1];
      }
    }
    array1.push(midIndex2);

    return array1;

  }
};


module.exports = middle;

