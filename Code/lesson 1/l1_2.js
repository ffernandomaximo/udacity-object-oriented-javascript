// // Using literal notation:
// const myObject = {};

// // Using the Object() constructor function:
// const myObject = new Object();

const cat = {
    age: 2,
    name: 'Bailey',
    meow: function () {
      console.log('Meow!');
    },
    greet: function (name) {
      console.log(`Hello ${name}`);
    }
};

cat.age ++;

console.log(cat);


const printer = {};

printer.on = true;
printer.mode = 'black and white';
printer['remainingSheets'] = 168;
printer.print = function () {
    console.log('The printer is printing!');
};

console.log(printer);

delete printer.mode;

console.log(printer);

function changeToEight(n) {
  n = 8; // whatever n was, it is now 8... but only in this function!
  console.log(n);
  //8
}
let n = 7;
changeToEight(n);
console.log(n);
// 7
//changeToEight() takes in a single argument, n, and changes it to 8. 
//However, this change only exists inside the function itself. 
//We then pass the global variable n (which is assigned the value 7) into the function. 
//After invoking it, n is still equal to 7.


let originalObject = {
  favoriteColor: 'red'
};

function setToBlue(object) {
  object.favoriteColor = 'blue';
}

setToBlue(originalObject);

console.log(originalObject.favoriteColor);
// 'blue'


const iceCreamOriginal = {
  Andrew: 3,
  Richard: 15
};
console.log(iceCreamOriginal)
//{ Andrew: 3, Richard: 15 }

const iceCreamCopy = iceCreamOriginal;
console.log(iceCreamCopy.Richard);
// 15

iceCreamCopy.Richard = 99;
console.log(iceCreamCopy.Richard);
// 99

console.log(iceCreamOriginal.Richard);
// 99

const parrot = {
  group: 'bird',
  feathers: true,
  chirp: function () {
    console.log('Chirp chirp!');
  }
};

const pigeon = {
  group: 'bird',
  feathers: true,
  chirp: function () {
    console.log('Chirp chirp!');
  }
};

console.log(parrot, pigeon);

console.log(parrot === pigeon);
// false

const myBird = parrot;
console.log(parrot === myBird);
