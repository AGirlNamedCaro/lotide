

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}   ✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}   🛑`);
  }
  
};

/**
 * PROBLEM
 * Create a function that takes in an Object and a Callback. It should scan the object
 * and return the FIRST key for which the callback returns a truthy value.
 * If not key is found return undefined
 *
 * INPUT
 * Object
 * Callback
 *
 * Output
 * returns key if truthy or undefined if falsey
 */


const findKey = (object, callback) => {

  for (const items in object) {
    const callbackResult = callback(object[items]);

    if (callbackResult) {
      
      return items;
    }

    
  }

  return undefined;

  
  
};


const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result,'noma');

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 1 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 1 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => undefined

assertEqual(result1, undefined);