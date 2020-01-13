const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;





describe("#middle", () => {
  it("returns an empty array when there is only one number", () => {
    assertArraysEqual(middle([2]), []);
  });

  it("returns '2' for [1,2,3]", () => {
    assertArraysEqual(middle([1,2,3]), [2]); 
  });

  it("returns the two middle numbers from an array with even numbers ", () => {
    assertArraysEqual(middle([1,2,3,4]), [2,3]);
  })

  it("returns the two middle numbers from an array with even numbers", () => {
    assertArraysEqual(middle([1,2,3,4,5,6]), [3,4] )});

  
});
