const senhaInput = document.getElementById("senha");
const btnGerar = document.getElementById("btn-gerar");
const btnCopiar = document.getElementById("btn-copiar");
const tamanhoInput = document.getElementById("tamanho");
const valorTamanho = document.getElementById("valor-tamanho");
const mensagem = document.getElementById("mensagem");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const sims = "!@#$%^&*()_+[]{}|;:,.<>?";

// Atualiza o valor do tamanho em tempo real
tamanhoInput.addEventListener("input", () => {
  valorTamanho.innerText = tamanhoInput.value;
});

function gerarSenha() {
  let caracteres = "";

  if (maiusculas.checked) caracteres += letrasMaiusculas;
  if (minusculas.checked) caracteres += letrasMinusculas;
  if (numeros.checked) caracteres += nums;
  if (simbolos.checked) caracteres += sims;

  if (caracteres === "") {
    mensagem.innerText = "Selecione pelo menos uma opção!";
    mensagem.style.color = "#f87171";
    senhaInput.value = "";
    return;
  }

  let senha = "";
  const tamanho = Number(tamanhoInput.value);

  for (let i = 0; i < tamanho; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[randomIndex];
  }

  senhaInput.value = senha;
  mensagem.innerText = "Senha gerada com sucesso!";
  mensagem.style.color = "#4ade80";
}

function copiarSenha() {
  if (!senhaInput.value) {
    mensagem.innerText = "Gere uma senha primeiro!";
    mensagem.style.color = "#f87171";
    return;
  }

  navigator.clipboard.writeText(senhaInput.value).then(() => {
    mensagem.innerText = "Senha copiada!";
    mensagem.style.color = "#4ade80";
  });
}

btnGerar.addEventListener("click", gerarSenha);
btnCopiar.addEventListener("click", copiarSenha);

// Gera uma senha assim que a página carrega
gerarSenha();
