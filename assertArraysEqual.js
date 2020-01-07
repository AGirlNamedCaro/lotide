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

const assertArraysEqual = function(array1, array2) {

  const result = eqArrays(array1, array2);

  if (result === true) {
    //console.log(`Assertion Passed: ${array1} === ${array2}   ✅`);
    return `Assertion Passed: ${array1} === ${array2}   ✅`;

  } else {

    // console.log(`Assertion Failed: ${array1} !== ${array2}   🛑`);
    return `Assertion Failed: ${array1} !== ${array2}  🛑`;
  }

};

console.log(assertArraysEqual([1,2,3],[1,2,3]));