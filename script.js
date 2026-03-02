console.log("Calculadora otimizada carregada");

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultado = document.getElementById("resultado");

function calcular(operacao) {
  const num1 = parseFloat(num1Input.value) || 0;
  const num2 = parseFloat(num2Input.value) || 0;

  let resultadoFinal;

  switch (operacao) {
    case "somar":
      resultadoFinal = num1 + num2;
      break;
    case "subtrair":
      resultadoFinal = num1 - num2;
      break;
    case "multiplicar":
      resultadoFinal = num1 * num2;
      break;
    case "dividir":
      resultadoFinal = num2 !== 0 ? num1 / num2 : "Erro";
      break;
  }

  resultado.textContent = resultadoFinal;
}

document.getElementById("btnSomar")
  .addEventListener("click", () => calcular("somar"));

document.getElementById("btnSubtrair")
  .addEventListener("click", () => calcular("subtrair"));

document.getElementById("btnMultiplicar")
  .addEventListener("click", () => calcular("multiplicar"));

document.getElementById("btnDividir")
  .addEventListener("click", () => calcular("dividir"));