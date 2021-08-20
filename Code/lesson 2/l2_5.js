/*
//function declaration
function returnHello() {
    return 'Hello!';
}

//function expression
// anonymous
const myFunction = function () {
    return 'Hello!';
};
  
// named
const myFunction = function returnHello() {
    return 'Hello!';
};


//IIFE
(function sayHi(){
    alert('Hi there!');
  }
)();

// alerts 'Hi there!'

(function (name){
    alert(`Hi, ${name}`);
  }
)('Andrew');
// alerts 'Hi, Andrew'

(function (x, y){
    console.log(x * y);
  }
)(2, 3);
// 6
*/
const myFunction = (
    function () {
        const hi = 'Hi!';
        return function () {
            console.log(hi);
        }
    }
)();

myFunction();