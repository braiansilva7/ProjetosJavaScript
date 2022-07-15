let armazenar = [];

for(let i = 0; i < 10; i++){
    let verificar = Math.trunc(Math.random() * (10 - 1) + 1);
    for(let j = 0; j < 10; j++){
        if((verificar === armazenar[j]) && (i !== j)){
            verificar = Math.trunc(Math.random() * (10 - 1) + 1);
            while(armazenar.includes(verificar)){
                verificar = Math.trunc(Math.random() * (10 - 1) + 1);
            }
        }
        
    }
    armazenar[i] = verificar;
    console.log('NÚMEROS SORTEADOS: '+armazenar[i]);
}

//armazenar.sort((a,b)=>a-b);
//console.log('NÚMEROS SORTEADOS: '+armazenar.join(' | '));

