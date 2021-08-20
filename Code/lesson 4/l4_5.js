/* Revealing Module Pattern */
let myModule = (function (){ 
    function privateMethod (message) {
        console.log(message);
    }
    function publicMethod (message) {
        privateMethod(message);
    }

    return {
        publicMethod: publicMethod
    };
})();

console.log(Object.keys(myModule))
console.log(myModule.publicMethod("Hello"))


/* Another Example */
let person = (function () {
    let privateAge = 0;
    let privateName = 'Andrew';
  
    function privateAgeOneYear() {
        privateAge += 1;
        console.log(`One year has passed! Current age is ${privateAge}`);
    }
  
    function displayName() {
        console.log(`Name: ${privateName}`);
    }
  
    function ageOneYear() {
        privateAgeOneYear();
    }
  
    return {
        name: displayName,
        age: ageOneYear
    };
  })();