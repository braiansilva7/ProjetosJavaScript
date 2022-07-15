let secret = Math.trunc(Math.random() * (10 - 1) + 1);
console.log('NUMÉRO DO PRIMEIRO SECRET: '+secret);

let tentativas = 0;

document.addEventListener("keypress", function(e){
    
    if(e.key === 'Enter'){
        console.log("Pressionei o ENTER: "+e.key);
        let verificarNumber = document.querySelector('input').value;
        let numeroRecebido = Number(document.querySelector('input').value);
    
        if(isNaN(numeroRecebido)){
            alert(`"${verificarNumber}" NÃO É UM NÚMERO`);
            document.querySelector('input').value = '';
            document.querySelector('.numberH2').innerHTML = "";
        }
        else if(numeroRecebido > 10 || numeroRecebido < 0){
            alert(`"${verificarNumber}" NÃO PODE SER MAIOR QUE "10" E NEM MENOR QUE "0"`);
            document.querySelector('input').value = '';
            document.querySelector('.numberH2').innerHTML = "";
        }
        else if(verificarNumber === ""){
            alert(`CAMPO NÃO PODE SER EM BRANCO`);
            document.querySelector('input').value = '';
            document.querySelector('.numberH2').innerHTML = "";
        }
        else if(numeroRecebido === secret){
            document.querySelector('.numberH2').innerHTML = `PARABÉNS, VOCÊ ACERTOU! FORAM NECESSÁRIAS ${tentativas} TENTATIVAS`, 4000
            document.querySelector('input').value = '';
            tentativas = 0;
            secret = Math.trunc(Math.random() * (10 - 1) + 1);        
        }
        else if(numeroRecebido < secret){
            //console.log('O número secreto é maior que: '+numeroRecebido);
            document.querySelector('.numberH2').innerHTML = `O número secreto é maior que: ${numeroRecebido}`;
            document.querySelector('input').value = '';
            tentativas++;
        }else{
            //console.log('O número secreto é menor que: '+numeroRecebido);
            document.querySelector('.numberH2').innerHTML = `O número secreto é menor que: ${numeroRecebido}`;
            document.querySelector('input').value = '';
            tentativas++;
        }
    }
    else{
        console.log("Pressionei o: "+e.key);
    }
});
document.querySelector('.btn_verificar').addEventListener('click', ()=>{
    let verificarNumber = document.querySelector('input').value;
    let numeroRecebido = Number(document.querySelector('input').value);
    
    if(isNaN(numeroRecebido)){
        alert(`"${verificarNumber}" NÃO É UM NÚMERO`);
        document.querySelector('input').value = '';
        document.querySelector('.numberH2').innerHTML = "";
    }
    else if(numeroRecebido > 10 || numeroRecebido < 0){
        alert(`"${verificarNumber}" NÃO PODE SER MAIOR QUE "10" E NEM MENOR QUE "0"`);
        document.querySelector('input').value = '';
        document.querySelector('.numberH2').innerHTML = "";
    }
    else if(verificarNumber === ""){
        alert(`CAMPO NÃO PODE SER EM BRANCO`);
        document.querySelector('input').value = '';
        document.querySelector('.numberH2').innerHTML = "";
    }
    else if(numeroRecebido === secret){
        document.querySelector('.numberH2').innerHTML = `PARABÉNS, VOCÊ ACERTOU! FORAM NECESSÁRIAS ${tentativas} TENTATIVAS`, 4000
        document.querySelector('input').value = '';
        tentativas = 0;
        secret = Math.trunc(Math.random() * (10 - 1) + 1);        
    }
    else if(numeroRecebido < secret){
        //console.log('O número secreto é maior que: '+numeroRecebido);
        document.querySelector('.numberH2').innerHTML = `O número secreto é maior que: ${numeroRecebido}`;
        document.querySelector('input').value = '';
        tentativas++;
    }else{
        //console.log('O número secreto é menor que: '+numeroRecebido);
        document.querySelector('.numberH2').innerHTML = `O número secreto é menor que: ${numeroRecebido}`;
        document.querySelector('input').value = '';
        tentativas++;
    }
        
});

