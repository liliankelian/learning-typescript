 // fazer uma operação ou outra em cima do proprio tipo 

type ToDo = {
    title: string,
    description:string,
    completed:boolean;
}

// Readonly
const todo:Readonly<ToDo> = {
    title: 'Watch Dark again',
    description: "To remember the details",
    completed:false
}

console.log(todo)

// Partial
//todo.completed = true; //dá erro poiis declaramos o objeto ToDo como readonly
function updateTodo(todo:ToDo, fieldsToUpdate:Partial<ToDo>){ //o Partial deixa todos os campos do objeto opicionais
    return {...todo, ...fieldsToUpdate} //os três pontinhos são expred operation pefando a propriedades
}

//trabalhando o princípio da imutabilidade
const todo2:ToDo = updateTodo(todo, { completed:true })
console.log(todo2)

// Pick
// Pego só as propriedades que eu quero
type TodoPreview = Pick<ToDo, "title" | "completed">
const todo3:TodoPreview = {
    title: "Close Ghost of Tsushima",
    completed: false
}
console.log(todo3)

// Omit
// Pego todas as propriedades e omito (escondo) as que eu não quero 
type TodoPreview2 = Omit<ToDo, "description">
const todo4:TodoPreview2 = {
    title: "Finish the activities of the week",
    completed: false
}
console.log(todo4)

