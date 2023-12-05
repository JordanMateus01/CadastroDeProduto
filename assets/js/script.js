function cadastrarProduto(codigoProduto, nomeProduto, descricaoProduto, valorProduto){
    var codigoProduto = document.getElementById("codProd").value;
    var nomeProduto = document.getElementById("nomProd").value;
    var descricaoProduto = document.getElementById("descProd").value;
    var valorProduto = document.getElementById("valProd").value
    var tabela = document.getElementById("tabelaDeProdutos");

    if(codigoProduto.length > 0 && nomeProduto.length > 0 && descricaoProduto.length > 0 && valorProduto.length > 0){
        tabela.style.display = "table";

        var codigo = document.getElementById("codigo").innerHTML = codigoProduto;
        var nome = document.getElementById("nome").innerHTML = nomeProduto;
        var descricao = document.getElementById("descricao").innerHTML = descricaoProduto;
        var valor = document.getElementById("valor").innerHTML = "R$ " + valorProduto;
    } else {
        alert("Preencha todos o campos.")
    }

}