function whoThis () {
    this.trickyish = true
}
  
whoThis();

console.log(trickyish);

const chameleon = {
    eyes: 2,
    lookAround: function () {
       console.log(`I see you with my ${this.eyes} eyes!`);
    }
};
  
chameleon.lookAround();
// 'I see you with my 2 eyes!'


console.log(window.location);