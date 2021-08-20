/*

Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
    if it is 'green', or to 'green' if it is 'pink'

*/
var chameleon = {
    color: "pink",
    changeColor: function () {
        if (this.color === "green") {
            this.color = "pink";
        } else if (this.color === "pink") {
            this.color = "green";
        }
    }
};

chameleon.changeColor()
console.log(chameleon.color);