function converteMoeda() {
    let valor = document.getElementById("conversor");
    let dolarNumero = valor.value;
    let valorEmReal = Number(dolarNumero) * 5;
    let divDinheiro = document.getElementById("dinheiroconvertido");
    divDinheiro.innerHTML = ` O resultado em real é R$ ${valorEmReal}`;
}