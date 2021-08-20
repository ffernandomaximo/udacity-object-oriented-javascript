/* subclasses */

const bear = {
    claws: true,
    diet: 'carnivore'
};

function PolarBear() { 
    // ...
}
  
PolarBear.prototype = bear;

const snowball = new PolarBear();
console.log(Object.getPrototypeOf(snowball));
//{ claws: true, diet: 'carnivore' }

snowball.color = 'white';
snowball.favoriteDrink = 'cola';
console.log(snowball);
//{ color: 'white', favoriteDrink: 'cola' }

console.log(snowball.__proto__);
// { claws: true, diet: 'carnivore' }

console.log(snowball.__proto__ === bear);
// true

console.log(snowball.__proto__ === PolarBear.prototype);
console.log(PolarBear.prototype);


//* Object.create() *//
const mammal = {
    vertebrate: true,
    earBones: 3
};

const rabbit = Object.create(mammal);

delete rabbit.vertebrate;
console.log(Object.getPrototypeOf(rabbit));
//{ vertebrate: true, earBones: 3 }
console.log(rabbit.__proto__ === mammal);
// true

rabbit.earBones = 5;
console.log(rabbit.earBones, mammal.earBones);

console.log(rabbit.vertebrate, mammal.vertebrate);