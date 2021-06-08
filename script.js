let adulto = document.getElementById("adulto"); /**valores dos inputs */
let crianca = document.getElementById("crianca");
let duracao = document.getElementById("duracao");

const botao = document.getElementById("botao");

let resultado = document.getElementById("resultado"); /**div onde aparece os resultados */



function soma(){/*functio ao clicar aparecer os resultados*/ 
    var cardapio = document.getElementsByName('Cardapio');

    let nAdulto = adulto.value /**valores dos imputs */
    let nCrianca = crianca.value;
    let valorD = duracao.value

   
    for (var i = 0; i < cardapio.length; i++){ /**verificar todos os checked */
        if ( cardapio[i].checked ) {
            if(cardapio[i].value == "carne"){ /* calculo da carne*/
                let qtdTotalCarne = carne(valorD) * nAdulto + carne(valorD) / 2  * nCrianca
                resultado.innerHTML = `<p><li>${qtdTotalCarne / 1000} Kg de Carne</li></p>`

            }else if (cardapio[i].value == "frango") {/* calculo do Frango*/
                let qtdTotalFrango = frango(valorD) * nAdulto + frango(valorD) / 2  * nCrianca
                resultado.innerHTML += `<p><li>${qtdTotalFrango / 1000} Kg de Frango</ç> </p>`

            }else if (cardapio[i].value == "cerveja") {/* calculo da Cerveja*/
                let qtdTotalCerveja = (nAdulto * cerveja(valorD))
                resultado.innerHTML += `<li>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</li>`
            
            }else if (cardapio[i].value == "refrigerante") {/* calculo da Refri*/
                let qtdTotalRefri = (nAdulto * refrigerante(valorD) + refrigerante(valorD) / 2  * nCrianca)
                resultado.innerHTML += `<p><li>${Math.ceil(qtdTotalRefri / 2000)} Pet's de 2L</li></p>`
            }

        } else if ( cardapio[i] ){ /**tirar oque estiver escrito no innerHtml */
            if(cardapio[i].value == "carne"){
                resultado.innerHTML = ""
            }  
        }
    }

    /**Pegar os valores de duração */
    function carne(valorD){ 
        if(valorD >= 6){
            return  600;
        } else {
            return  400;
        }
    }

    function frango(valorD){
        if(valorD >= 6){
            return  500;
        } else {
            return  300;
        }
    }

    function cerveja(valorD){
        if(valorD >= 6){
            return  2000;
        } else {
            return  1200;
        }
    }  

    function refrigerante(valorD){
        if(valorD >= 6){
            return  1500;
        } else {
            return  1000;
        }
    } 
}

botao.addEventListener("click", soma)