/* constructor function */
function City(name, population) {
    this.name = name;
    this.population = population;
    this.identify = function () {
        console.log(`${this.name}'s population is ${this.population}.`);
    };
}

const sanFrancisco = new City('San Francisco', 870000);

console.log(sanFrancisco);

const mountainView = new City('Mountain View', 78000);

console.log(mountainView);

/* factory functions */
function Basketball(color) {
    return {
        color: color,
        numDots: 35000
    };
    // this.color = color
    // this.numDots = 35000
}

// const orangeBasketball = new Basketball('orange');
const orangeBasketball = Basketball('orange');

console.log(orangeBasketball);
// { color: 'orange', numDots: 35000 }

const myBB = Basketball('blue and green');
const yourBB = Basketball('purple');
const bouncy = Basketball('neon pink');


/* Factory Function - Closure */
function Radio(mode) {
    let on = false;
  
    return {
        mode: mode,
        turnOn: function () {
            on = true;
        },
        isOn: function () {
            return on;
        }
    };
}
  
let fmRadio = Radio('fm');
fmRadio.on;
//undefined
  
console.log(fmRadio.isOn());
// false

console.log(fmRadio.turnOn());
console.log(fmRadio.isOn());
//true


/* Functional Mixins */
function CoffeeMaker(object) {
    let needsRefill = false;
  
    return Object.assign({}, object, {
        pourAll: function () {
            needsRefill = true;
        },
        isEmpty: function () {
            return needsRefill;
        }
    });
}


const mixedCoffeeMaker = CoffeeMaker({style: 'percolator'});

console.log(mixedCoffeeMaker);
/*
{
  style: 'percolator',
  pourAll: function () {
    needsRefill = true;
  },
  isEmpty: function () {
    return needsRefill;
  }
}
*/