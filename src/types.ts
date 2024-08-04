//boolean (true, false)
let isOpen:boolean;
isOpen = false;

//string
let message:string;
message = 'bla bla bla';

//number (int,float, hex, binary)
let total:number;
total = 0xff0

//array (types[])
let items:string[];
items = ['foo','bar'];

let list: Array<number>
list = [1,2,3]

//tuple
let title: [number, string, string]
title = [1,'foo','bar']

//enum
enum Colors{
    white = "#fff",
    black = '#000'
}

// any (qualquer coisa) NÃO É LEGAL - MESMA COISA NO JS
let coisa:any 
coisa = [];
coisa = 'bla bla';
coisa = 2;

//void (vazio)
function logger(){
    console.log('foo')
}

// null | undefined
type bla = string | undefined
type blu = string | null

// never
throw new Error("error");

// object
let cart: object;
cart = {
    key:'fii'
}
console.log(cart)

// Type Inference
let msg = "messagem definida"
msg = "mensagem nova" //não deixa eu colocar como número pois já foi declarada como string quando setei o valor

window.addEventListener("click", (e) => {
  console.log(e.target);  
})

type Uid = number | string | undefined

function logDetails(uid: Uid, item:string) {
    console.log(`An user with ${uid} has a item as ${item}`);
}

function logInfo(uid: Uid, name:string) {
    console.log(`An user with ${uid} has a item as ${name}`);
}

logDetails(123,'borracha');
logDetails('456','caneta');

logInfo('123','Lilian');
logInfo('123','Joana');
