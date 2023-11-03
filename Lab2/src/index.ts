//1
class circle {
    x: number;
    y: number;
    raio : number;

    constructor(x:number, y:number, raio: number){
        this.x = x; 
        this.y = y;
        this.raio = raio;
    }

    calculoArea() : number{
        return Math.pow(this.raio,2)*3.14;
    }

    comprimentoCircunferencia(): number{
        return this.raio*2*3.14; 
    }

    getX() :number {
        return this.x;
    }

    getY() : number{
        return this.y;
    }

    getRaio() : number {
        return this.raio; 
    }

}
//testando a classe
/*
const c1 = new circle(2,2,3); 
console.log(c1.calculoArea());
console.log(c1.comprimentoCircunferencia()); */


//2 
class Moeda {
    valor: number;
    nome: String;

    constructor(valor:number, nome:string){
        this.valor = valor;
        this.nome = nome;
    }

    getValor(): number {
        return this.valor;
    }

    getNome() : String{
        return this.nome;
    }
}

class Cofrinho {

    moedas : Moeda[]; 
    constructor() {
        this.moedas = []; 
    }

    adicionar(m: Moeda) : void{
        this.moedas.push(m); 
    }

    calcularTotal() {
        
    }
}