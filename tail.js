const assertEqual = require('./assertEqual');

let arrayNew = [];

const tail = function(array) {

  for (let i = 0; i < array.length; i++) {
    arrayNew.push(array[i]);
  }

  arrayNew = arrayNew.slice(1);
  console.log("TCL: tail -> arrayNew", arrayNew)
  return arrayNew;

};



module.exports = tail;