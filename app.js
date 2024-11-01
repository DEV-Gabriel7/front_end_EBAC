$(document).ready(function() {

    $("#formulario").on("submit", function(e){
        e.preventDefault();
        const nomeTarefa = $("#nome-tarefa").val();
        const inserirLista = $(`<li>${nomeTarefa}</li>`).appendTo("ul");
        $("#nome-tarefa").val(" ");
    });
    
    //Esse código adiciona ou remove a classe "completo" do elemento atual, permitindo alternar estilos ou funcionalidades.
    $("ul").on("click", "li", function() {
        //$(this): Aplica a classe "completo" apenas ao <li> que foi clicado.
        $(this).toggleClass("completo");
    });
    
});
