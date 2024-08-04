"use strict";
// fazer uma operação ou outra em cima do proprio tipo 
// Readonly
const todo = {
    title: 'Watch Dark again',
    description: "To remember the details",
    completed: false
};
console.log(todo);
// Partial
//todo.completed = true; //dá erro poiis declaramos o objeto ToDo como readonly
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate); //os três pontinhos são expred operation pefando a propriedades
}
//trabalhando o princípio da imutabilidade
const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
const todo3 = {
    title: "Close Ghost of Tsushima",
    completed: false
};
console.log(todo3);
const todo4 = {
    title: "Finish the activities of the week",
    completed: false
};
console.log(todo4);
