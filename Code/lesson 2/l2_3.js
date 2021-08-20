const myName = 'Andrew';
// Global variable

function introduceMyself() {

    const you = 'student';
    // Variable declared where introduce() is defined
    // (i.e., within introduce()'s parent function, introduceMyself())

    function introduce() {
        console.log(`Hello, ${you}, I'm ${myName}!`);
    }

    return introduce();
}

introduceMyself()
//Hello, student, I'm Andrew!

/***/
var globalNumber = 5;

function globalIncrementer() {
  const localNumber = 10;

  globalNumber += 1;
  return globalNumber;
}

console.log(globalIncrementer());
// 6

console.log(globalIncrementer());
// 7

console.log(globalIncrementer());
// 8

//console.log(localNumber);

// ReferenceError: localNumber is not defined

/** */
function one() {
    two();
    function two() {
        three();
        function three() {
        // function three's code here
        }
    }
}
  
one();

/** */
const symbol = '¥'; //global variable

function displayPrice(price) {
  const symbol = '$'; //local variable
  console.log(symbol + price);
}

displayPrice('80');
// '$80'
console.log(symbol)
// '¥'