function SoftwareDeveloper(){
    this.favoriteLanguage = 'Javascript';
}

let developer = new SoftwareDeveloper();

console.log(developer);
// console.log(Object.keys(developer));

let engineer = new SoftwareDeveloper();
let programmer = new SoftwareDeveloper();

console.log(engineer);
console.log(programmer);

function SoftwareDeveloper(name) {
    this.favoriteLanguage = 'JavaScript';
    this.name = name;
}

let instructor = new SoftwareDeveloper('Andrew');
console.log(instructor);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Andrew' }


function Hero(name, role) {
    this.name = name;
    this.role = role;
    this.introduce = function() {
        console.log(`My name is ${this.name} and I am a ${this.role}.`)
    }
}

const taylor = new Hero('Taylor', 'mother');
const riley = new Hero('Riley', 'coach');

console.log(taylor.name, riley.role);

taylor.introduce(), riley.introduce()