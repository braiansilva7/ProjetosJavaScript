var numerosArmazenados = [];
let numeroSoma = [''];
let filterRepetido2 = [];
let evento1 = document.querySelector(".evento1");
let evento2 = document.querySelector(".evento2");
let evento3 = document.querySelector(".evento3");
let evento4 = document.querySelector(".evento4");
let linhaL1 = document.querySelector(".teste");
var soma = 0;
let inputs = document.querySelectorAll("input");

function clear(){
    for(let i=0; i <= 8; i++){
        document.querySelector(`.item${i}`).value = "";
    }
}
document.querySelector('.btn_limpar').addEventListener('click', () =>{
    clear();
    clearDocuments();
});

function clearDocuments(){
    let resetEventos = document.querySelectorAll("h3");
    resetEventos.forEach(function (evento, index){
        evento.style.display = "none";
    });
    numerosArmazenados = [''];
    filterRepetido2 = [''];
}

document.querySelector(".container").addEventListener('keyup', ()=>{
    inputs.forEach(function (event, index){
        numeroSoma[index] = event.value;
        
        //soma = numeroSoma.slice(0, 3);
        
    });
    soma = numeroSoma;
    //console.log("ESTOU AQUI: "+soma);
    console.log("SOMA: "+eval(numeroSoma));
    //linhaL1.innerHTML = soma;//VERIFICAR ESSA LINHA
});


document.querySelector('.btn_verificar').addEventListener('click', ()=>{

    clearDocuments();

    inputs.forEach(function (event, index){

        numerosArmazenados[index] = event.value;
        /*filterRepetido = numerosArmazenados.filter( function(elemento, index){
            return numerosArmazenados.indexOf(elemento) === index;
        }); 
       // console.log('NÚMEROS: '+filterRepetido);*/
        filterRepetido2 = numerosArmazenados.filter( function(e, index){
            if(!isNaN(e)){
                return numerosArmazenados.indexOf(e) == index;
            } 
        }); 
       // console.log('NÚMEROS RECEBIDOS: '+filterRepetido2.length);
        if(event.value == "" && filterRepetido2.length < 9){
            evento1.style.display = "flex";
            evento1.innerHTML = "Favor Preencher os Campos Vazios!!!";
        }else if(isNaN(Number(event.value))){
            evento2.style.display = "flex";
            evento2.innerHTML = "Favor Preencher Somente Números!";
        }else if(Number(event.value) < 1 || Number(event.value) > 9){
            evento3.style.display = "flex";
            evento3.innerHTML = "Não é Permitido Número Menor que 1 e Maior que 9";
        }
        else if(filterRepetido2.length != 9 && !isNaN(numerosArmazenados)){//VERIFICAR ESSA LINHA*****************************
            evento4.style.display = "flex";
            evento4.innerHTML = "Os Números não Podem ser Repetidos!";
        }else if(filterRepetido2.length == 9){

            let resetEventos = document.querySelectorAll("h3");
            resetEventos.forEach(function (evento, index){
                evento.style.display = "none";
            });

            numerosArmazenados[index] = event.value;              
            //console.log('NÚMEROS DIGITADOS: '+numerosArmazenados);
        }
        
            //filterRepetido2 = numerosArmazenados.filter(e => e != isNaN(e) && numerosArmazenados.indexOf(elemento) == index);           
        
    });
    
});
function validar(arr){
    console.log('NÚMEROS DIGITADOS: '+arr);
}
