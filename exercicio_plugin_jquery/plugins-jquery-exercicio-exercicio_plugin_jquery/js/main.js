$(document).ready(function () {
    // Inicialização do carousel com autoplay
    $("#carousel-imagens").slick({
        autoplay: true,
    });

    // Aplicação de máscaras
    $('#telefone').mask('(00) 0 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: { required: true },
            email: { required: true, email: true },
            telefone: { required: true },
            endereco: { required: true },
            cep: { required: true },
            cpf: { required: true },
        },
        messages: {
            nome: "Por favor, insira o seu nome completo.",
            telefone: "Por favor, insira seu telefone.",
            email: "Por favor, insira seu e-mail.",
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    });
});