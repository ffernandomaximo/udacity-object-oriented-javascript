const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  }
};
mockingbird.describe();
// 'To Kill a Mockingbird is a classic novel'

const pride = {
  title: 'Pride and Prejudice'
};
mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'


const cat = {
  name: 'Bailey'
};

function sayHello(message) {
  console.log(`${message}, ${this.name}`);
}

sayHello.call(cat, 'Nice to see you');

sayHello.apply(cat, ['Hello']);


function invokeTwice(cb) {
  cb();
  cb();
}

const dog = {
  age: 5,
  growOneYear: function () {
    this.age += 1;
  }
};

const myGrow = dog.growOneYear.bind(dog);

invokeTwice(myGrow)
console.log(dog.age);
// 7


const driver = {
  name: 'Danica',
  displayName: function () {
    console.log(`Name: ${this.name}`);
  }
};

const car = {
  name: 'Fusion'
};

driver.displayName.bind(car);

console.log(driver.displayName());

