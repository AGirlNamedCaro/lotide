const assertEqual = require('./assertEqual');
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
  str.split(' ');

  for (const item of str) {

    if (letters[item]) {
      letters[item] += 1;
    } else {
      letters[item] = 1;
    }
  }

  return letters;


};



module.exports = countLetters;