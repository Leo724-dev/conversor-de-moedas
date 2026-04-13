const converter = document.querySelector(".converter");

function converterValor(){
    const valor = document.querySelector("#valor").value;
    const valorConvertido = document.querySelector(".valor-moeda-convertida");
    const valorMoedaConverter = document.querySelector(".valor-moeda");

    const valorDolar = 5.2;
    const convertido = valor / valorDolar;

    valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor);

    valorMoedaConverter.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertido);
}

converter.addEventListener("click", converterValor);