let texto = document.querySelector("#texto");
texto.textContent = "Jucilene";

let nome = prompt("Qual o seu nome");
if (texto.textContent == null){
    texto.textContent ="Seja bem-vindo(a)!" ;
}
else{
    texto.textContent = nome;
}



texto.textContent = nome;