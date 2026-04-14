const converter = document.querySelector(".converter"); // botão
const moedaPais = document.querySelector("#moeda-pais"); // select

function converterValor(){
    const valor = document.querySelector("#valor").value; // valor digitado
    const valorConvertido = document.querySelector(".valor-moeda-convertida"); // Real
    const valorMoedaConverter = document.querySelector(".valor-moeda"); // Moeda que vai ser convertida

    const valorDolar = 5.1; // Valor do Dolar Atualmente
    const valorEuro = 5.88; // Valor do Euro Atualmente
    const valorLibra = 6.79; // Valor da Libra Atualmente
    const valorIene = 0.0315; // Valor do Iene Atualmente


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

    if(moedaPais.value == "libra"){
        // Caso o valor a converter for LIBRA
        valorMoedaConverter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valor/ valorLibra)
    }

    if(moedaPais.value == "iene"){
        // Caso o valor a converter for IENE
        valorMoedaConverter.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
            maximumFractionDigits: 0
        }).format(valor/ valorIene)
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

    if(moedaPais.value == "libra"){
        nomeDaMoeda.innerHTML = "Libra"
        bandeira.src = "../img/libra.avif"
        bandeira.style.width = "70px";
        bandeira.style.height = "70px";
        bandeira.style.borderRadius = "50%";
    }

    if(moedaPais.value == "iene"){
        nomeDaMoeda.innerHTML = "Iene"
        bandeira.src = "../img/iene-moeda.jpg"
        bandeira.style.width = "70px";
        bandeira.style.height = "70px";
        bandeira.style.borderRadius = "50%";
    }

    converterValor();

}

moedaPais.addEventListener("change", mudarBandeira)
converter.addEventListener("click", converterValor);