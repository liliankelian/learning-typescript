class UserAccount {
    protected name:string;
    age:number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
    
    logDetails():void{
        console.log(`The player ${this.name} is ${this.age} years old`);
    }
}

class UserDetails {
    constructor(
        public description:string,
        public date: Date
    ){}
}


const Lilian = new UserAccount('Lilian', 38)

//acessando as propriedades do objeto criado
console.log(Lilian); 
console.log(Lilian.age); 

// acessando uma funcionalidade do meu objeto
Lilian.logDetails();


class CharAccount extends UserAccount {
    constructor(
        readonly name:string,
        age:number,
        private nickname:string,
        private level:number,
    ){
        super(name,age);
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old and has the char ${this.nickname} at level ${this.level}`);
    }

    get getLevel(){
        console.log('----GET ----')
        return this.level
    }

    set setLevel(level:number){
        this.level = level
    }
}


const andre = new CharAccount('Andre', 18, 'andrekk',100)
andre.logDetails();
andre.age = 19;
andre.logCharDetails();

console.log(andre.getLevel)

andre.setLevel = 500

andre.logCharDetails();

