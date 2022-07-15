let array = [];
document.querySelector('button').addEventListener('click',()=>{
    let verificar = document.querySelector('input').value;
    if (verificar == ''){
        window.alert('Favor preencher o campo');
    }else{
        array.push(document.querySelector('input').value);
        document.querySelector('input').value = "";
        limpar();
        listar();
    }
    
});

document.querySelector('.btn_listar').addEventListener('click',()=>{
    array = [];
    limpar();
});
function limpar(){
    document.querySelector('.listagem').innerHTML = "";
}
function listar(){
    let linha = document.querySelector('.listagem');
    for (let i=0; i < array.length; i++){
        linha.innerHTML += array[i].toUpperCase()+"<br/>";
    }
}