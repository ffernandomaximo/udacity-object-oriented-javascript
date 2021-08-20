function Cat(name) {
    this.lives = 9;
    this.name = name;
   
    this.sayName = function () {
      console.log(`Meow! My name is ${this.name}`);
    };
}

//* *//

// function Dog(age, weight, name) {
//   this.age = age;
//   this.weight = weight;
//   this.name = name;
//   this.bark = function () {
//     console.log(`${this.name} says woof!`);
//   };
// }

function Dog(age, weight, name) {
    this.age = age;
    this.weight = weight;
    this.name = name;
}
  
Dog.prototype.bark = function () {
    console.log(`${this.name} says woof!`);
};
  
dog1 = new Dog(2, 60, 'Java');
  
dog2 = new Dog(4, 55, 'Jodi');
  
dog1.bark();
  
dog2.bark();

//* *//

// (A)
function Dalmatian (name) {
    this.name = name;
    this.bark = function() {
        console.log(`${this.name} barks!`);
    };
}


// (B)
function Dalmatian (name) {
    this.name = name;
}
  
Dalmatian.prototype.bark = function() {
    console.log(`${this.name} barks!`);
};

//* replacing the prototype object *//
function Hamster() {
    this.hasFur = true;
}
 
let waffle = new Hamster();
let pancake = new Hamster();
 
Hamster.prototype.eat = function () {
    console.log('Chomp chomp chomp!');
};
  
waffle.eat();
// 'Chomp chomp chomp!'
pancake.eat();
// 'Chomp chomp chomp!'



//* replace Hamster *//
Hamster.prototype = {
    isHungry: false,
    color: 'brown'
};

console.log(waffle.color);
// undefined
waffle.eat();
// 'Chomp chomp chomp!'
console.log(pancake.isHungry);
// undefined

const muffin = new Hamster();

// muffin.eat();
// // TypeError: muffin.eat is not a function
console.log(muffin.isHungry);
// false
console.log(muffin.color);
// 'brown


//* hasOwnProtorype() *//
function Phone() {
    this.operatingSystem = 'Android';
}
  
Phone.prototype.screenSize = 6;

const myPhone = new Phone();
const own = myPhone.hasOwnProperty('operatingSystem');

console.log(own);
// true

const inherited = myPhone.hasOwnProperty('screenSize');

console.log(inherited);
// false

//* isPrototypeOf *//
const rodent = {
    favoriteFood: 'cheese',
    hasTail: true
};

function Mouse() {
    this.favoriteFood = 'cheese';
}

Mouse.prototype = rodent;

const ralph = new Mouse();

const result = rodent.isPrototypeOf(ralph);

console.log(result);
// true

//* getPrototypeOf *//
const myPrototype = Object.getPrototypeOf(ralph);

console.log(myPrototype);
// { favoriteFood: 'cheese', hasTail: true }


//* constructor *//
function Longboard() {
    this.material = 'bamboo';
}
  
const board = new Longboard();
  
console.log(board.constructor);
  
// function Longboard() {
//   this.material = 'bamboo';
// }