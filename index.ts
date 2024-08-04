var input1 = document.getElementById("num1") as HTMLInputElement;
var input2 = document.getElementById("num2") as HTMLInputElement;
var button = document.getElementById("btn") as HTMLButtonElement;

function sum(a:number, b:number){
    return a + b;
}

button.addEventListener("click", function (){
    console.log(sum(Number(input1.value),Number(input2.value)));
});