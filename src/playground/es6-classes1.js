class Person {
    constructor(name = 'Anon', age= 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I'm ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}

const me = new Person('AJ', 22);
console.log(me.getDescription());