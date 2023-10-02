
function generateNumber(){

const min = Math.ceil(document.querySelector(".meu-imput").value)
const max = Math.floor(document.querySelector(".meu-imput-max").value)

const result =Math.floor(Math.random() * (max - min + 1)) + min;

alert(result)

}







