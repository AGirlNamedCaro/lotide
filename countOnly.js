const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}   ✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}   🛑`);
  }
  
};

/*
PROBLEM
Write a function that will be given an array and an object.
The function will return an object containing counts of everything that the
input object listed
*/
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
//The function should report back how many instances of each string were found in the
//all items array of strings
  const results = {};

  for (const item of allItems) {

    //if items to count has a specific item
    if (itemsToCount[item]) {
      //If results contains "items" in its array increment it by one
      if (results[item]) {
        results[item] += 1;
      
      }
        
      //else add item to array and set it to one
      else {
        results[item] = 1;
      }

    }
  }
  return results;

};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
