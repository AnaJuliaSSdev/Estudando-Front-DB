//prop publicas
class Pessoa{
    nome: string;
    idade: number;

    constructor(nome:string, idade:number){
        this.idade = idade;
        this.nome = nome;
    }

    toString(){
        return `[idade=${this.idade}, nome=${this.nome}]`; 
    }
}

//const pessoa = new Pessoa('Aninha', 20); 
//console.log(pessoa.toString()); 

/*
//prop privadas
class PessoaV2{
    #nome: string;
    #idade: number;

    constructor(nome:string, idade:number){
        this.#idade = idade;
        this.#nome = nome;
    }

    toString(){
        return `[idade=${this.#idade}, nome=${this.#nome}]`; 
    }

    get nome(){
        return this.#nome;
    }

    get idade(){
        return this.#idade; 
    }
    
    set idade (valor:number){
        this.#idade = valor; 
    }

}

const p2 = new PessoaV2('Aninha', 20);
p2.idade = 21;
console.log(p2.idade); */

//propriedades via parametros

/*
class PessoaV3 {
    constructor(public nome: string, public idade: number) {}
}

const p3 = new PessoaV3('Ana', 20);
console.log(p3.nome); */

//HERANÇA
class Produto {
    #nome : string;
    #preco : number;

    constructor (nome:string, preco: number){
        this.#nome = nome;
        this.#preco = preco;
    }

    get nome(){
        return this.#nome;
    }

    get preco(){
        return this.#preco;
    }

    set preco(valor:number){
        this.#preco = valor; 
    }

    toString() {
        return `[nome=${this.#nome}, preco=${this.#preco}]`; 
    }
}

class ProdutoPerecivel extends Produto{
    #dataValidade: Date;

    constructor (nome: string, preco: number, dataValidade: Date) {
        super(nome, preco);
        this.#dataValidade = dataValidade; 
    }

    get dataValidade() {
        return this.#dataValidade.toISOString(); 
    }

    toString(){
        return super.toString() + `[dataValidade=${this.#dataValidade}]`; 
    }
}
/*
const produto = new Produto('caneta', 1.99);
//os meses vao de 0 a 11, ent 12 é 11, 11 é 10 e assim vai
const produtoPerecivel = new ProdutoPerecivel('queijo', 40, new Date(2023,11,30));

//herda de produto, seu prototype é produto
console.log(Object.getPrototypeOf(produtoPerecivel)); 
const produtos = [produto, produtoPerecivel];

produtos.forEach( p => console.log(p.toString())); */

const umaPessoa = new Pessoa('João Ninguém', 10); 

const outraPessoa = {
    nome: 'Fulano de Tal',
    idade:20
}
console.log(typeof umaPessoa);
console.log(typeof outraPessoa); 
console.log(umaPessoa instanceof Pessoa);
console.log(outraPessoa instanceof Pessoa);

function saudar(pessoa:Pessoa){
    console.log(`Alô, ${pessoa.nome}!`); 
}
saudar(umaPessoa); //--> polimorfismo estrutural
saudar(outraPessoa); //duck

type Nomeado = {nome:string, sobrenome?:string};
function saudarNomeado(coisa:Nomeado) {
    console.log(`Alô, ${coisa.nome}!`); 
}

saudarNomeado(outraPessoa); 