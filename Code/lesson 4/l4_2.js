/* Mixin */
let target = { letter: 'a', number: 11 };
let source = { number: 7 };

Object.assign(target, source);

console.log(target);
// { letter: 'a', number: 7 }


/* Multiple Source Objects */
const duck = {
    hasBill: true
};

const beaver = {
    hasTail: true
};

const otter = {
    hasFur: true,
    feet: 'webbed'
};
  
const platypus = Object.assign({}, duck, beaver, otter); 
console.log(platypus);
// { hasBill: true, hasTail: true, hasFur: true, feet: 'webbed' }


/* is platypus prototype-linked? */
console.log(platypus.constructor);
// Object()

console.log(platypus.isPrototypeOf(duck));
// false

console.log(duck.isPrototypeOf(platypus));
// false

console.log(platypus.isPrototypeOf(beaver));
// false

console.log(beaver.isPrototypeOf(duck));
// false

console.log(platypus.isPrototypeOf(otter));
// false

console.log(otter.isPrototypeOf(platypus));
// false