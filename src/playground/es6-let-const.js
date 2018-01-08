var nameVar = 'Andrew';
var nameVar = 'Renamed ha';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = "Joe";
console.log('nameLet', nameLet);

const nameConst = 'Brooke';
console.log('nameConst', nameConst);

function getPetName(){
    let petName = 'Phil';
    return petName;
}

const petName = getPetName();
console.log(petName)

// Block scoping

var fullName = 'Banana Pie';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName)