const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;



// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns the original length of the array, in this case its 3", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assertEqual(words.length,3);
    
  });

});