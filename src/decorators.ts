// trabalhar nas partes anotadas , diferanças funções que está anotando. Notation

// @Component
// @Selector
// @useState("dasdas")

//Exemplo de Decorator
// function log(target:any){
//     console.log(target);
// }

// @log
// class Foo {}

// // Factory 
// function logger2(prefix:string){
//     return (target:any) => {
//         console.log(`${prefix} - ${target}`)
//     }
// }

// @logger2('maravilha')
// class Foo2 {}

// // Class decorator
// // decorator da versão de API
// function setAPIVersion(apiVersion:string){
//     return(constructor:any) => {
//         return class extends constructor {
//             version = apiVersion
//         }
//     }
// }

// @setAPIVersion('1.0.0')
// class API {}

// console.log(new API())

// // property decorator
// function minLength() {
//     return (target:any, key:string) => {
//         console.log(target)
//         console.log(key)
//     }
// }

// class Movie { 

//     @minLength()
//     title:string;

//     constructor (t:string){
//         this.title = t;
//     }
// }

// const movie = new Movie("Interstalar")

// console.log(movie.title)
