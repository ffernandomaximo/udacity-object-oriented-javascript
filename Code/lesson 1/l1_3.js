const developer = {
    name: 'Andrew'
};

developer.sayHello = function () {
    console.log('Hi there!');
};

developer.sayHello();
// 'Hi there!';

developer['sayHello']();
// 'Hi there!';

developer.favoriteLanguage = function (language) {
    console.log(`My favorite programming language is ${language}`);
};

developer.favoriteLanguage("JavaScript")

const myArray = [ function alerter() { console.log('hello!'); } ];
myArray[0]();

const triangle = {
    type: 'scalene',
    identify: function () {
      console.log(`This is a ${this.type} triangle.`);
    }
};