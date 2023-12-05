console.log("hi world");

const person = {
    name:'John',
    age: 78,
    favourtieColour: 'green',
    sayHi: function(){
        console.log("HI!");
    }
};

person.sayHi();

const personTwo = {
    name:'Jeff',
    age: 90,
    favourtieColour: 'magenta',
    sayHi: function(name){
        console.log(`HI ${name}!`);
    }
};

personTwo.sayHi(personTwo.name);
personTwo.sayHi('Glen');

const personThree = {
    name:'Mike',
    age: 20,
    favourtieColour: 'blue',
    getName: function(){
        return this.name;
    }
};

const nameOfPers = personThree.getName();
console.log(nameOfPers);