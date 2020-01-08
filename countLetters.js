const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}   ✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}   🛑`);
  }
  
};

/**
 * PROBLEM
 * Create a function that should take in a sentence and then return the count
 * of each letter in that sentence.
 * INPUT: STRING
 * OUTPUT: OBJECT with each letter as a key + its count
 *
 * 1.Create a function that takes in a string sentence
 * 2. Write a test case
 *
 */

const countLetters = function(str) {
  //  console.log(str);
  const letters = {};

  for (const item of str) {

    if (letters[item]) {
      letters[item] += 1;
    } else {
      letters[item] = 1;
    }
  }

  return letters;


};
const string = "hello";
const result = countLetters(string);

assertEqual(result["h"], 1);
assertEqual(result["e"], 1);
assertEqual(result["l"], 2);
assertEqual(result["o"], 1);



