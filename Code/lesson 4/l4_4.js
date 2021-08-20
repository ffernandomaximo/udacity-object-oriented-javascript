function instantiateDeveloper() {
    return {
        name: 'Veronika',
        getName: function () {
            return this.name;
        }
    };
}


let developer = instantiateDeveloper();

console.log(developer.name, developer.getName());


/* closure and scope */
function instantiateDeveloper2() {
    let name = 'Veronika'
    return {
        getName: function () {
            return this.name;
        }
    };
}

let developer2 = instantiateDeveloper2();

console.log(developer2.name, developer.getName());


/* Module Pattern */
let person = (function () {
    let name = 'Veronika';
    return  {
        getName: function () {
            return name;
        },
        setName: function (myName){
            name = myName;
        }
    };
})();
  
console.log(person.name);
// undefined
console.log(person.getName());
// 'Veronika'
  
person.setName('Not Veronika');
//
console.log(person.name);
// undefined
console.log(person.getName());
// 'Not Veronika'