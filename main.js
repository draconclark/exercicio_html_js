document.getElementById("meuFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio do formulário padrão

  const campoA = parseInt(document.getElementById("campoA").value);
  const campoB = parseInt(document.getElementById("campoB").value);

  if (isNaN(campoA) || isNaN(campoB)) {
    alert("Por favor, insira números válidos em ambos os campos.");
  } else if (campoB <= campoA) {
    alert("O número B deve ser maior que o número A.");
  } else {
    alert("Formulário válido. Número B é maior que o número A.");
    // Aqui você pode realizar alguma ação adicional ou enviar o formulário, se necessário.
  }
});