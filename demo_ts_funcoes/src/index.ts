function saudar() {
    console.log("E eu vou tomar um tacacá");
};

saudar();

function saudarComNome(nome:string) {
console.log(`Vem tomar um tacacá, ${nome}!`)
}

saudarComNome('Anarquistinha');


//retorna string, pq no return tem uma string, então já é tipada
//ou, retorna a string com um undefined
function criarSaudacao(nome?:string) { //sem valor default, uma vez n setado é undefined
    return `${nome} tomou um tacacá!`;
}

function criarSaudacaoDefault(nome = 'John Doe'){ //com valor default, se n for setado recebe john doe
    return `Alô, ${nome}`;
}

const saudacao = criarSaudacao('Anarquistinha');
console.log(saudacao); 


//retorna a string e undefined
console.log(criarSaudacaoDefault('Ana')); 

const anonima = function (nome:string){
    return `Alô, ${nome}!`; 
}; 

console.log(anonima);
console.log(anonima('teste'));

const saudacaoArrow = (nome:string) => `Alô, ${nome}!`; 

console.log(saudacaoArrow); 
console.log(saudacaoArrow('Aninha')); 

//execução imediata de funções
(function (x:number, y:number){
    console.log(x+y);
}) (1,2); 

//Closure
function multiplicar(fator:number): (n:number) => number {
    return numero => numero * fator; 
} 

const mult2 = multiplicar(2);
const mult10 = multiplicar(10);
console.log(mult2(3));
console.log(mult10(3)); 

