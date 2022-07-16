function sorteio(){
    //novoValor.sort((a, b) => a - b);
    let validar = verificarField();
    if(validar == 'none'){
      let novoValor = [] = realizaSorteio();
      novoValor.sort(ordernar);
      for (let i = 1; i < 7; i++){
        document.querySelector('.number'+i).value = novoValor[i-1];
      }
    }
    else{
      let novoValor = [] = realizaSorteio();
      novoValor.sort(ordernar);
      for (let i = 1; i < 7; i++){
        document.querySelector('.number'+i).value = novoValor[i-1];
      }
      let campoSegundo = [] = realizaSorteio();
      campoSegundo.sort(ordernar);
      for (let j = 1; j < 7; j++){
        document.querySelector('.teste'+j).value = campoSegundo[j-1];
      }
    }
}
//========VERIFICA SE O CAMPO ESTÁ NONE OU INLINE-BLOCK=================================================
function verificarField(){
  let fieldset = document.querySelector('.novo');
  let display = window.getComputedStyle(fieldset, null).display;

  return display;

}
//========VERIFICA SE O CAMPO ESTÁ NONE OU INLINE-BLOCK=================================================
function verificarBotaoAtivo(){
  let fieldset = document.querySelector('.btnLimpaAposta');
  let display = window.getComputedStyle(fieldset, null).display;

  return display;
}
//==============REALIZA O SORTEIO DOS NÚMEROS E ORGANIZA E TIRA OS REPETIDOS==============================
function realizaSorteio(){
  let novoValor = [];
  let number;
    for (let i = 0; i < 6; i++){
      number = Math.floor(Math.random() * 61); //sorteia um número aleatório.
      for (let j = 0; j < 6; j++){
          if (number == novoValor[j] && j != i || number == 0){
            number = Math.floor(Math.random() * 61); //sorteia um número aleatório.
            while(novoValor.includes(number)){
              number = Math.floor(Math.random() * 61); //sorteia um número aleatório.  
            }
          }else{
            novoValor[i] = number;
          }
      }
    }
    return novoValor;
}
//============SEGUNDO BOTÃO DE GERAR SURPRESINHA============================================================
function ordernar(a, b){
  return (a - b);
}
//======BOTÃO LIMPAR APOSTAS DA MEGA SENA===================================================================
function Clear(){
  for (let i = 1; i < 7; i++){
    document.querySelector('.number'+i).value = " ";
    document.querySelector('.teste'+i).value = " ";
  }
}
//=========FUNÇÃO PARA LISTAR SURPRESINHA DA MEGA SENA======================================================
function listar(){
  if(document.querySelector('.novo').style.display = "none"){
    document.querySelector('.novo').style.display = "inline-block";
    document.querySelector('.btnLimpar').style.display = "none";
    document.querySelector('.btnClear').style.display = "inline-block";
  }
  let html = '<legend>'+'SURPRESINHA MEGA SENA'+'</legend>';
  let num = 1;
  let ordem = [
    '1º: ',
    '2º: ',
    '3º: ',
    '4º: ',
    '5º: ',
    '6º: '
  ];
  for (let i in ordem){
      html = html + '<label>'+ ordem[i] +'</label>';
      html = html + '<input class=teste'+num+' disabled>';
      num = num + 1;
  }

  document.querySelector(".novo").innerHTML = html;
}
//=================BTN MEGA =============================================
function btnMega(){
  document.querySelector('.field').style.display = "inline-block";
  document.querySelector('.btnSortear').style.display = "inline-block";
  document.querySelector('.btnLimpar').style.display = "inline-block";
  document.querySelector('.megaSena').style.display = "none";
   
  let validar = verificarBotaoAtivo();
  if(validar == 'none'){
      document.querySelector('.btnLimpaAposta').style.display = "inline-block";
  }
}
//==================BTN LOTOFACIL========================================
function btnLoto(){
  document.querySelector('.lotofacil').style.display = "none";
  document.querySelector('.novoLoto').style.display = "inline-block";

  criarCampoLoto();
  document.querySelector('.btnNovoSortear').style.display = "inline-block";
  document.querySelector('.btnNovoLimpar').style.display = "inline-block";
  
  let validar = verificarBotaoAtivo();
  if(validar == 'none'){
      document.querySelector('.btnLimpaAposta').style.display = "inline-block";
  }
}
//====FUNÇÃO PARA CRIAR CAMPO DA LOTOFÁCIL================================
function criarCampoLoto(){
  let html = '<legend>'+'LOTOFÁCIL'+'</legend>';
  let num = 1;
  let ordem = [
    '1º: ',
    '2º: ',
    '3º: ',
    '4º: ',
    '5º: ',
    '6º: ',
    '7º: ',
    '8º: ',
    '9º: ',
    '10º: ',
    '11º: ',
    '12º: ',
    '13º: ',
    '14º: ',
    '15º: '
  ];
  for (let i in ordem){
      html = html + '<label>'+ ordem[i] +'</label>';
      html = html + '<input class=fieldLoto'+num+' disabled>';
      num = num + 1;
  }

  document.querySelector(".novoLoto").innerHTML = html;
}
//=======LIMPAR TODAS AS APOSTAS=====================================
function btnLimparApostas(){
  document.querySelector('.field').style.display = "none";
  document.querySelector('.btnSortear').style.display = "none";
  document.querySelector('.btnLimpar').style.display = "none";
  document.querySelector('.btnLimpar').innerHTML = "GERAR CAMPO";
  document.querySelector('.btnLimpaAposta').style.display = "none";
  document.querySelector('.novo').style.display = "none";
  document.querySelector('.novoLoto').style.display = "none";
  document.querySelector('.btnNovoSortear').style.display = "none";
  document.querySelector('.btnNovoLimpar').style.display = "none";
  document.querySelector('.btnClear').style.display = "none";

  document.querySelector('.megaSena').style.display = "inline-block";
  document.querySelector('.lotofacil').style.display = "inline-block";

  for (let i = 1; i < 7; i++){
    document.querySelector('.number'+i).value = " ";
    document.querySelector('.teste'+i).value = " ";
  }
   
}
//=============FUNÇÃO PARA ORDENAR E LISTAR APOSTAS DA LOTOFÁCIL=======
function sortearLoto(){
    let novoValor = [] = realizaSorteioLoto();
    novoValor.sort(ordernar);
    for (let i = 1; i < 16; i++){
      document.querySelector('.fieldLoto'+i).value = novoValor[i-1];
    }
}
//===============FUNÇÃO PARA REALIZAR O SORTEIO DA LOTOFÁCIL===========
function realizaSorteioLoto(){
  let novoValor = [];
  let number = 0;
    for (let i = 0; i < 15; i++){
      number = Math.floor(Math.random() * 26); //sorteia um número aleatório.
      for (let j = 0; j < 15; j++){
          if (number == novoValor[j] && j != i || number == 0){
            number = Math.floor(Math.random() * 26); //sorteia um número aleatório.
            while(novoValor.includes(number)){
              number = Math.floor(Math.random() * 26); //sorteia um número aleatório.  
            }
          }else{
            novoValor[i] = number;
          }
      }
    }
    return novoValor;
}
//=========LIMPAR JOGO DA LOTOFACIL===================================
function limparLoto(){
  for (let i = 1; i < 16; i++){
    document.querySelector('.fieldLoto'+i).value = " ";
  }
}
