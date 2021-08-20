function callAndAdd (n, callbackFunction) {
    return n + callbackFunction;
}

function returnsThree () {
    return 3;
}

console.log(callAndAdd(50, returnsThree()));

/***/
//forEach() 1
function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            console.log(array[i]);
        }
    }
};

function isPositive(n) {
    return n > 0;
};

r = each([-2, 7, 11, -4, -10], isPositive);

console.log(r);


//forEach() 2
[1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) {
    if (n % 2 !== 0) {
      console.log(n);
    }
});


function logIfOdd(n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
};

//forEach() 3
[1, 5, 2, 4, 6, 3].forEach(logIfOdd);


/***/
//map()

const names = ['David', 'Richard', 'Veronika'];

const nameLengths = names.map(function (callback) {
    return callback.length
});

console.log(nameLengths);


/***/
//filter()
const shortNames = names.filter(function(name) {
    return name.length < 6;
});
  
console.log(shortNames);
// ['David']