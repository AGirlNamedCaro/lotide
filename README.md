# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @agirlnamedcaro/lotide`

**Require it:**

`const _ = require('@agirlnamedcaro/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Determines whether two arrays are equal
* `assertEqual(...)`: Determines whether two inputs are equal
* `assertObjectsEqual(...)`: Determine whether two objects are equal
* `countLetters(...)`: Counts the number of times a letter is repeated in the argument passed
*`countOnly(...)`: Returns only the items that are identified in the second argument 
*`eqArrays(...)`: Checks for equality between arrays
*`eqObjects(...)`: Checks for equality between objects
*`findKey(...)`: Returns the first key that returns a truthy value
*`findKeyByValue(...)`: Returns the key of the value needed
*`flatten(...)`: Takes in an array within an array and converts it into one
*`head(...)`: Returns the first item of an array
*`letterPositions(...)`: returns the indexes in a string with a specific character
*`map(...)`: Takes in an array that will return output based on the callback function
*`middle(...)`: Returns the middle element(s)
*`tail(...)`: Returns every element in the array with exception of the head
*`takeUntil(...)`: Pushes items into a separate array until the callback function provides a truthy value
*`without(...)`: Iterates through an array and removes items based on the second argument