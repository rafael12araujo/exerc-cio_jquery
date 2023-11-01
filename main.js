$(document).ready(function() {
    // Manipula o envio do formulário
    $("#tarefa-form").submit(function(event) {
      event.preventDefault(); // Evita o recarregamento da página
      // Obtém o valor do campo de entrada
    var tarefa = $("#tarefa-input").val();
      // Adiciona a tarefa à lista como um novo item de lista
    if (tarefa) {
        $("#lista-tarefas").append("<li>" + tarefa + "</li>");
        // Limpa o campo de entrada
        $("#tarefa-input").val("");
    }
    });
    // Aplica um efeito de linha riscada ao clicar em um item da lista
    $("#lista-tarefas").on("click", "li", function() {
    $(this).toggleClass("concluido");
    });
});