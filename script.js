/* Programa - Modelo 1 */
document.addEventListener("DOMContentLoaded", function(){
    /* Evento para o botão Maiusculo */
    document.querySelector("#btn-maiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#result").innerHTML = inputText.toUpperCase() 
    })

    document.querySelector("#btn-minuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value
        document.querySelector("#result").innerHTML = inputText.toLowerCase()
    })

    document.querySelector("#btn-primeira-letra").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value
        let inputTextFormatado = inputText.charAt(0).toUpperCase() + inputText.slice(1);
        document.querySelector("#result").innerHTML = inputTextFormatado
    })

    document.querySelector("#btn-limpar").addEventListener("click", function(){
        document.querySelector("#result").innerHTML = ""
    })

    document.querySelector("#btn-inverter").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value
        let inputTextReverse = inputText.split('').reverse().join('')
        document.querySelector("#result").innerHTML = inputTextReverse
    })


})