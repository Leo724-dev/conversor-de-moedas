const converter = document.querySelector(".converter"); // botão
const moedaPais = document.querySelector("#moeda-pais"); // select

function converterValor(){
    const valor = document.querySelector("#valor").value; // valor digitado
    const valorConvertido = document.querySelector(".valor-moeda-convertida"); // Real
    const valorMoedaConverter = document.querySelector(".valor-moeda"); // Moeda que vai ser convertida

    const valorDolar = 5.1; // Valor do Dolar Atualmente
    const valorEuro = 5.88; // Valor do Euro Atualmente

    if(moedaPais.value == "dolar"){
        // Caso o valor a converter for DOLAR
         valorMoedaConverter.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valor / valorDolar);
    }

    if(moedaPais.value == "euro"){
        // Caso o valor a converter for EURO
        valorMoedaConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valor/ valorEuro)
    }

    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor); // Valor Brasileiro Formatado

   
}

function mudarBandeira(){
    // Mudar bandeira do país e informações
    const nomeDaMoeda = document.querySelector("#nome-da-moeda");
    const bandeira = document.querySelector(".bandeira");

    if(moedaPais.value == "dolar"){
        nomeDaMoeda.innerHTML = "Dólar Americano";
        bandeira.src = "../img/estados-unidos (1) 1.png";
    }

    if(moedaPais.value == "euro"){
        nomeDaMoeda.innerHTML = "Euro"
        bandeira.src = "../img/euro.png"
    }

    converterValor();

}

moedaPais.addEventListener("change", mudarBandeira)
converter.addEventListener("click", converterValor);