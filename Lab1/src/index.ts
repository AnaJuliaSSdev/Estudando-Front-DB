//1
function imprimirIntervalo(começo: number, final: number): void{

    if (começo <= final){
        for(let i = começo; i <= final; i++){
            console.log(i);
        }
    } else {
        console.log("O primeiro elemento deve ser menor ou igual que o segundo elemento."); 
    }

}
//1
function imprimirIntervaloWhile(começo: number, final: number) : void{

    if(começo <=final){
        let i:number = começo;
        while (i <= final){
            console.log(i);
            i++;
        }
    } else {
        console.log("O primeiro elemento deve ser menor ou igual que o segundo elemento."); 
    }

}

//2
//loop infinito, devido ao ponto flutuante não tratado e as limitações do TS quanto a isso
/*
let i: number = 0;
while(i!=10){
    i+=0.2; 
} */


//3
function min(x: number, y: number): number {
    const menor: number = x > y ? y : x; 
    return menor; 
}

//4
//iterativa
function pow(base: number, expoente: number) : number{
    let result = 1;
    for(let i = 0; i < expoente; i++){
      result = result*base; 
    }
    return result;
}
//4
//recursiva
const powR = (base:number, expoente:number): number => {
    if (expoente === 0){
        return 1; 
    } else {
        return base * powR(base, expoente-1); 
    }
}


//5
function  toMaiusculaPrimeira(frase: String): String{       
    const uperFirts = frase.charAt(0).toUpperCase();
    const rest = frase.slice(1); 
    return uperFirts+rest; 
}

//6
function getMax(numeros: number[]): number {
    let maior:number = 0, i:number = 0;
    for(let n of numeros){
        if(n>maior){
            maior = n;
        }
    }
    return maior;
}  

//7
function freq(numeros: number[]) {
    const aMap: Map<number, number> = new Map();
    for (let n of numeros) {
      aMap.set(n, (aMap.get(n) || 0) + 1);
    }
  
    aMap.forEach((value, key) => {
      console.log(`Número: ${key} => ${value} vez(es)`);
    });
  }
