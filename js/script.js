document.addEventListener("DOMContentLoaded", function () {
    const cadastroDespesa = document.getElementById("cadastroDespesa");
    const cadastroMetas = document.getElementById("cadastroMetas");
    const mensagemDespesa = document.getElementById("mensagemDespesa");
    const mensagemMetas = document.getElementById("mensagemMetas");
    const listaMetas = document.getElementById("containerMetas");
    const listaDespesasCadastro = document.getElementById("containerDespesasCadastro");
    const listaDespesas = document.getElementById("containerDespesas");
    const totalDespesasElement = document.getElementById("totalDespesas");
    const exibirDespesas = document.getElementById("exibirDespesas");

    cadastroDespesa.addEventListener("click", function () {
        const nomeDespesa = document.getElementById("nomeDespesa").value;
        const valorDespesa = document.getElementById("valorDespesa").value;

        if (nomeDespesa && valorDespesa) {
            const divDespesa = document.createElement("div");
            divDespesa.textContent = `${nomeDespesa}: R$${valorDespesa}`;
            listaDespesasCadastro.appendChild(divDespesa);

            document.getElementById("nomeDespesa").value = "";
            document.getElementById("valorDespesa").value = "";
            mensagemDespesa.textContent = "";
        } else {
            mensagemDespesa.textContent = "Preencha todos os campos para cadastrar a despesa.";
        }
    });

    cadastroMetas.addEventListener("click", function () {
        const limiteGastos = document.getElementById("limiteGastos").value;
        const economizar = document.getElementById("economizar").value;

        if (limiteGastos && economizar) {
            const divMetas = document.createElement("div");
            divMetas.textContent = `Limite de Gastos: R$${limiteGastos}, Economizar: R$${economizar}`;
            listaMetas.appendChild(divMetas);

            document.getElementById("limiteGastos").value = "";
            document.getElementById("economizar").value = "";
            mensagemMetas.textContent = "";
        } else {
            mensagemMetas.textContent = "Preencha todos os campos para cadastrar a meta financeira.";
        }
    });

    exibirDespesas.addEventListener("click", function () {
        fetch("https://65550e2263cafc694fe761a7.mockapi.io/api/v1/despesa")
            .then(response => response.json())
            .then(data => {
                listaDespesas.innerHTML = '';
                data.forEach(despesa => {
                    const divDespesa = document.createElement("div");
                    divDespesa.textContent = `${despesa.nome}: R$${despesa.valor}`;
                    listaDespesas.appendChild(divDespesa);
                });

                const totalDespesas = data.reduce((total, despesa) => total + parseFloat(despesa.valor), 0);
                totalDespesasElement.textContent = `Total: R$${totalDespesas.toFixed(2)}`;
            })
            .catch(error => {
                console.error("Erro ao obter dados da API:", error);
                mensagemDespesa.textContent = "Erro ao obter dados da API.";
            });
    });
});
