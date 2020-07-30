var valorHora = document.querySelector("#valor-hora");
var horasProjeto = document.querySelector("#horas-projeto");
var resultado = document.querySelector("#resultado");

/* function calcular() {
    var valorProjeto = (valorHora.valueAsNumber * horasProjeto.valueAsNumber);
    resultado.textContent = "R$" + (valorProjeto).toFixed(2);
} */

// insercao de tratamento de valores menores ou igual a zero e troca de ' . ' por ' , ' 
function calcular() {
    var valorProjeto = (valorHora.valueAsNumber * horasProjeto.valueAsNumber);
    if (Number.isNaN(valorProjeto)) {
        alert("Preencha todos os campos !");
    } else if (valorHora.valueAsNumber <= 0 || horasProjeto.valueAsNumber <= 0) {
        alert("Insira um valor maior que 0");
    } else {
        resultado.textContent = "R$" + (valorProjeto.toString().replace(".", ","));
    }
}