"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old`);
    }
}
class UserDetails {
    constructor(description, date) {
        this.description = description;
        this.date = date;
    }
}
const Lilian = new UserAccount('Lilian', 38);
//acessando as propriedades do objeto criado
console.log(Lilian);
console.log(Lilian.age);
// acessando uma funcionalidade do meu objeto
Lilian.logDetails();
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.name = name;
        this.nickname = nickname;
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} is ${this.age} years old and has the char ${this.nickname} at level ${this.level}`);
    }
    get getLevel() {
        console.log('----GET ----');
        return this.level;
    }
    set setLevel(level) {
        this.level = level;
    }
}
const andre = new CharAccount('Andre', 18, 'andrekk', 100);
andre.logDetails();
andre.age = 19;
andre.logCharDetails();
console.log(andre.getLevel);
andre.setLevel = 500;
andre.logCharDetails();
