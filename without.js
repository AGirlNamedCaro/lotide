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
1. Create a function that takes in 2 array parameters
2. Iterate through the source array and remove items that are in the remove array
  2.1 we use the for loop for iteration
  2.2
 */
const without = function(source,remove) {
  let indexRemove = 0;
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    newArray.push(source[i]);
  
  }
  
  for (let x = 0; x < remove.length; x++) {
      
      
     
      
    for (let i = 0; i < source.length; i++) {
       
      if (source[i] === remove[indexRemove]) {
        newArray.splice(i,1);
            
             
      }
      
        
    }

  }
  return newArray;

};


console.log(assertArraysEqual(without([1,2,3],[2,3]),[1]));
console.log(assertArraysEqual(without([1,2,3],[2]),[1,3]));


const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

