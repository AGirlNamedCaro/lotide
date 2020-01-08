/**
 * PROBLEM
 * Implement a function that will return the indices in the string
 * of a specific characte
 * Multiple # may be needed because of results appearing in
 * different positions
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


const letterPositions = function(sentence) {
  const positions = {};
  let index = 0;
  sentence.split(' ');
  
  for (const item of sentence) {
    
    if (!positions[item]) {
      positions[item] = [];
    }
    
    positions[item].push(index);

    index++;

  }
  console.log(positions);
  return positions;
   
};



  



let string = 'hello';
let result = letterPositions(string);
console.log(assertArraysEqual(result,{h:[0],e:[1],l:[2,3],o:[4]}));
string = "Lighthouse in the house!";
result = letterPositions(string);
console.log(assertArraysEqual(result,{l:[0], i: [9],g:[2],h:[3,5,13,15],t:[12],o:[6,16],s:[7,17], e:[8,18]}));
