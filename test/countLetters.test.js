const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


const string = "hello";
const result = countLetters(string);


describe("#countLetters", () => {
  it("returns the amount of times that a certain letter repeats itself", () => {
    assertEqual(result["h"], 1);
    assertEqual(result["e"], 1);
    assertEqual(result["l"], 2);
    assertEqual(result["o"], 1);

  })
})
