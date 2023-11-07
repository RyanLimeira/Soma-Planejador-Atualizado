document.addEventListener("DOMContentLoaded", function () {
    // Obtém referências para elementos HTML
    const cadastroDespesa = document.getElementById("cadastroDespesa");
    const cadastroMetas = document.getElementById("cadastroMetas");
    const mensagemDespesa = document.getElementById("mensagemDespesa");
    const mensagemMetas = document.getElementById("mensagemMetas");
    const listaDespesas = document.getElementById("containerDespesas");
    const listaMetas = document.getElementById("containerMetas");
    const exibirDespesas = document.getElementById("exibirDespesas");
    const exibirMetas = document.getElementById("exibirMetas");

    // Event listener para o botão "Cadastrar Despesa"
    cadastroDespesa.addEventListener("click", function () {
        // Obtém os valores dos campos de entrada
        const nomeDespesa = document.getElementById("nomeDespesa").value;
        const valorDespesa = document.getElementById("valorDespesa").value;

        if (nomeDespesa && valorDespesa) {
            // Cadastrar a despesa e exibi-la na lista
            const divDespesa = document.createElement("div");
            divDespesa.textContent = `${nomeDespesa}: R$${valorDespesa}`;
            listaDespesas.appendChild(divDespesa);

            // Limpar os campos de entrada e a mensagem de erro
            document.getElementById("nomeDespesa").value = "";
            document.getElementById("valorDespesa").value = "";
            mensagemDespesa.textContent = "";
        } else {
            // Exibir mensagem de erro se os campos não estiverem preenchidos
            mensagemDespesa.textContent = "Preencha todos os campos para cadastrar a despesa.";
        }
    });

    // Event listener para o botão "Cadastrar Metas Financeiras"
    cadastroMetas.addEventListener("click", function () {
        // Obtém os valores dos campos de entrada
        const limiteGastos = document.getElementById("limiteGastos").value;
        const economizar = document.getElementById("economizar").value;

        if (limiteGastos && economizar) {
            // Cadastrar a meta financeira e exibi-la na lista
            const divMetas = document.createElement("div");
            divMetas.textContent = `Limite de Gastos: R$${limiteGastos}, Economizar: R$${economizar}`;
            listaMetas.appendChild(divMetas);

            // Limpar os campos de entrada e a mensagem de erro
            document.getElementById("limiteGastos").value = "";
            document.getElementById("economizar").value = "";
            mensagemMetas.textContent = "";
        } else {
            // Exibir mensagem de erro se os campos não estiverem preenchidos
            mensagemMetas.textContent = "Preencha todos os campos para cadastrar a meta financeira.";
        }
    });

    // Event listener para o botão "Exibir Despesas"
    exibirDespesas.addEventListener("click", function () {
        // Alternar a exibição da lista de despesas
        if (listaDespesas.style.display === "none" || listaDespesas.style.display === "") {
            listaDespesas.style.display = "block";
        } else {
            listaDespesas.style.display = "none";
        }
    });

    // Event listener para o botão "Exibir Metas Financeiras"
    exibirMetas.addEventListener("click", function () {
        // Alternar a exibição da lista de metas financeiras
        if (listaMetas.style.display === "none" || listaMetas.style.display === "") {
            listaMetas.style.display = "block";
        } else {
            listaMetas.style.display = "none";
        }
    });
});
