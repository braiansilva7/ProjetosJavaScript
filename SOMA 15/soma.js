function clear(){
    for(let i=0; i <= 8; i++){
        document.querySelector(`.item${i}`).value = "";
    }
}
document.querySelector('.btn_limpar').addEventListener('click', () =>{
    clear();
    
});

document.querySelector('.btn_verificar').addEventListener('click', ()=>{
    let posicao = [];
    let filterRepetido = [];
    Inicio: for(let i=0; i <= 8; i++){
        console.log(document.querySelector(`.item${i}`).value);
        posicao [i] = Number(document.querySelector(`.item${i}`).value);       
        for(j = 0; j <= 8; j++){
            if(posicao[i] === posicao[j] && i != j && posicao[i] != ""){
                alert(`NÚMERO "${posicao[i]}" REPETIDO`);
                break Inicio;
            }
            
        }
        if(posicao[i] == ""){
            alert("Os Campos não podem ser vazios");
            break Inicio;
        }
        else if(isNaN(posicao[i])){
            alert(`Erro na posição: "${1+i}"... Digite somente números`);
            break Inicio;       
        }
        else if(posicao[i] > 9 || posicao[i] < 1 && posicao[i] != ""){
            alert(`"ATENÇÃO!!!" os números não podem ser maior que 9 e nem menor que 1`);
            break Inicio;
        }        
    }
    filterRepetido = posicao.filter( function(elemento, index){
        return posicao.indexOf(elemento) == index;
    }); 
    //console.log(">> "+filterRepetido);
    if(posicao.filter((e, _) => e > 0 && e <= 9).length == 9 && filterRepetido.length == 9){
        validar(posicao);
    }             
});
function validar(arr){
    console.log('NÚMEROS DIGITADOS: '+arr);
}
/*
else{
                resultado = posicao[0] + posicao[1] + posicao[2];   
                console.log('A SOMA TOTAL É: '+resultado);
                if(resultado === 9){
                    alert('PARABÉNS, VC GANHOU!');
                }
                else{
                    console.log('continue tentando');
                }
            }    
 */