const form = document.getElementById("form-numero"); //variável para alterar o form
const mensagemErro = document.getElementById("mensagemErro");

form.addEventListener("submit", function(e) {
    e.preventDefault();
}); //o ''preventDefault'' cancela a ação de submit do formulário (esse comando é para travar o reload quando o botão é clicado).

document.getElementById("btn").addEventListener("click", validarNumeros);

function validarNumeros(){
    const primeiroNumero = parseFloat(document.getElementById("primeiro-numero").value);
    const segundoNumero = parseFloat(document.getElementById("segundo-numero").value);

    if (primeiroNumero > segundoNumero) {
        mensagemErro.textContent = "O PRIMEIRO número é o maior.";
    } else if (primeiroNumero < segundoNumero) {
        mensagemErro.textContent = "O SEGUNDO é  número é o menor.";
    } else {
        mensagemErro.textContent = "Os números são iguais.";
    }
}

/*
No exemplo acima:

- Selecionamos os campos de input e o elemento onde a mensagem de erro será exibida.

- Criamos uma função ''validarNumeros'' que converte os valores dos campos de string para números (parseFloat), verifica se são números válidos (isNaN), e compara os valores.

- Dependendo do resultado da comparação, a mensagem de erro é atualizada com o texto apropriado.

- Adicionamos um evento de clique ao botão de validação, que chama a função ''validarNumeros''.
*/