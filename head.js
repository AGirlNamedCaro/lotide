const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}   ✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}   🛑`);
  }
  
};

let first;

const head = function(array) {

  first = array[0];

  return first;
  

}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 2);
assertEqual(head([]), undefined);