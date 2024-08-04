"use strict";
//boolean (true, false)
let isOpen;
isOpen = false;
//string
let message;
message = 'bla bla bla';
//number (int,float, hex, binary)
let total;
total = 0xff0;
//array (types[])
let items;
items = ['foo', 'bar'];
let list;
list = [1, 2, 3];
//tuple
let title;
title = [1, 'foo', 'bar'];
//enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NÃO É LEGAL - MESMA COISA NO JS
let coisa;
coisa = [];
coisa = 'bla bla';
coisa = 2;
//void (vazio)
function logger() {
    console.log('foo');
}
// never
throw new Error("error");
// object
let cart;
cart = {
    key: 'fii'
};
console.log(cart);
// Type Inference
let msg = "messagem definida";
msg = "mensagem nova"; //não deixa eu colocar como número pois já foi declarada como string quando setei o valor
window.addEventListener("click", (e) => {
    console.log(e.target);
});
function logDetails(uid, item) {
    console.log(`An user with ${uid} has a item as ${item}`);
}
function logInfo(uid, name) {
    console.log(`An user with ${uid} has a item as ${name}`);
}
logDetails(123, 'borracha');
logDetails('456', 'caneta');
logInfo('123', 'Lilian');
logInfo('123', 'Joana');
