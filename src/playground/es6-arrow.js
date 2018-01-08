/* es5 function
function square(x){
    return x * x;
};

console.log(square(8));

// es6 arrow
const squareArr = (x) => {
    return x * x;
};

//console.log('es6 ' + squareArr(3));

const squareArr = (x) => x * x;*/

// Challenge
// Regular function

const name = 'Caroline Scott';
let firstName;

function getFirstName (name){
    const firstName = name.split(' ')[0];
    console.log(firstName);
}
//console.log(getFirstName(name))

// Arrow Function
const getFName = (name) => {
    return name.split(' ')[0];
}

//console.log(getFName(name))

// Better Arrow Function
const get1stName = (name) => name.split(' ')[0];

console.log(get1stName(name));