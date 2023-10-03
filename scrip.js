
function generateNumber(){

const min = Math.ceil(document.querySelector(".meu-imput").value)
const max = Math.floor(document.querySelector(".meu-imput-max").value)

console. log(min, max)

if(min >= max){
    alert("O valor mínimo tem que ser MENOR que o valor máximo!")
} else{
    const result =Math.floor(Math.random() * (max - min + 1)) + min;

alert(result)

}


}







