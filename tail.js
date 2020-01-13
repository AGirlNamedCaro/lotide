const assertEqual = require('./assertEqual');

let arrayNew = [];

const tail = function(array) {

  for (let i = 0; i < array.length; i++) {
    arrayNew.push(array[i]);
  }

  arrayNew = arrayNew.splice(1);

};



module.exports = tail;