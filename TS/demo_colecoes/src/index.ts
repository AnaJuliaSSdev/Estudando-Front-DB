const numeros = [1,2,3,4,5]; //tipado pra number
const array = []; //tipado como any
const array2:string[] = []; //tipado como string[]
console.log(numeros);
console.log(numeros[0]);
numeros[0] = 0; 
console.log(numeros); 
console.log(numeros.length); 

let i:number = 1;
if(numeros[0] == 0){
    for(i; i < numeros.length; i++ ){
        numeros[i] = numeros[i]-1;  
    }
}

console.log(numeros);

//qual o index desse array q o conteudo é '0'
console.log(numeros.indexOf(0));  //se n tiver retorna -1

console.log('Imrpimindo com iterador:');
for(const n of numeros ){
    console.log(n); 
}

numeros[0] = 5; 

console.log('Imprimindo com forEach:');
numeros.forEach((n,i) => {
    console.log(`numeros[${i}] = ${n}`); 
}); 

const palavras = ['alfa', 'bravo', 'charlie', 'delta']; 
const r1 = palavras.map(p => p.length);
console.log(r1); 
const r2 = palavras.filter(p => p.length > 4); 
console.log(r2);

const r3 = palavras.reduce((anterior,atual) => atual.length + anterior, 0);
console.log(r3); 

const mapa = new Map<string, string>();
mapa.set('RS', 'Rio Grande do Sul');
mapa.set('SC', 'Santa Catarina');
mapa.set('PR','Paraná');
console.log(mapa.get('RS'));


console.log('Imprimindo todas as chaves:');
for (let chave of mapa.keys()){
    console.log(chave);
}
console.log('Imprimindo todos os valores:')
for(let valor of mapa.values()){
    console.log(valor); 
}

const conjunto = new Set<number>(); 
conjunto.add(1);
conjunto.add(2);
conjunto.add(1);
console.log(conjunto.size); 


