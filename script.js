var valorHora = document.querySelector("#valor-hora");
var horasProjeto = document.querySelector("#horas-projeto");
var resultado = document.querySelector("#resultado");

/* function calcular() {
    var valorProjeto = (valorHora.valueAsNumber * horasProjeto.valueAsNumber);
    resultado.textContent = "R$" + (valorProjeto).toFixed(2);
} */

function calcular() {
    var valorProjeto = (valorHora.valueAsNumber * horasProjeto.valueAsNumber);
    if (Number.isNaN(valorProjeto)) {
        alert("Preencha todos os campos !");
    } else {
        resultado.textContent = "R$" + (valorProjeto).toFixed(2);
    }
}