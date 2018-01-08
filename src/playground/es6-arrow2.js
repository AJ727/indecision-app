// arguments object - no longer bound with arrow function

/*const add = function(a, b) {
    return a + b;
}*/

const add = (a,b) => {
    return a + b;
};
console.log(add(34,2));

// this keyword - no longer bound

/*const user = {
    name: 'Tank',
    cities: ['Seminole, Orlando, Tokyo'],
    printPlacesLived: function (){
        const that = this;

        this.cities.forEach(function (city){
            console.log(that.name + ' has lived in ' + city);
        });
    }
};*/

const user = {
    name: 'Tank',
    cities: ['Seminole', 'Orlando', 'Tokyo'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    
        
        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });*/
    }
};

//console.log(user.printPlacesLived());

// Challenge 
const multiplier = {
    number : [1, 6, 9],
    multiplyBy : 4,
    multiply(){
        return this.number.map((num) => this.multiplyBy * num);
    }
};

console.log(multiplier.multiply());