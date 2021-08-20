function greet() {
    console.log('Functions are cool!');
};

// greet();

function alertThenReturn() {
    console.log('Message 1!');
  
    return function () {
      console.log('Message 2!');
    };
}
 
// alertThenReturn(); alertThenReturn()();
//Message 1!

var innerFunction = alertThenReturn();
innerFunction();
//Message 2!