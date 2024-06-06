export type TipoConta = 'corrente' | 'poupança' | 'debito' | 'salario'
export type Products = 'Livro' | 'Jornal' | 'Informática'
export type CarroCompras = string[]

export default class Conta {
 private saldo: number;
 private tipo: TipoConta;
 private nConta: string;
 private agencia: string;
 private titularidade: string;

  constructor(
    titularidade: string,
    agencia: string,
    nConta: string,
    tipo: TipoConta = 'poupança',
    saldo: number,
  ){
    this.titularidade = titularidade;
    this.agencia = agencia;
    this.nConta = nConta;
    this.tipo = tipo;
    this.saldo = saldo;
  }

  getSaldo(){
    return this.saldo
  }

  depositar(valor: number){
    if (valor <= 0){
        throw new Error('Valores negativos  não são válidos!')
    }
    this.saldo += valor
  }

  transferir(contaDestino: Conta, valor: number) {
    if(contaDestino.nConta === this.nConta){
      throw new Error('Não é possível transferir para a mesma conta!')
    } 
    this.sacar(valor)
    contaDestino.depositar(valor)
  }

  sacar(valor: number){
    if(this.saldo <= 0){
      throw new Error('Não pode sacar saldo negativo')
    }
    this.saldo -= valor
  }
};

export class Loja{
  
  products: Products;
  price: number;
  client: string;
  saldoConta: number;
  compras: CarroCompras;

  constructor(products: Products, price: number, client: string, saldoConta: number) {
    this.products = products;
    this.price = price;
    this.client = client;
    this.saldoConta = saldoConta;
    this.compras = [];
    }

  comprarProduto(clientComprador: string, saldoConta: number): string {
    if (saldoConta <= 0) {
      throw new Error('não pode comprar sem saldo');
    }
    if (saldoConta < this.price) {
      throw new Error('saldo insuficiente para a compra');
    }
    this.client = clientComprador;
    this.saldoConta = saldoConta - this.price;
    return `${clientComprador} comprou ${this.products} por ${this.price}. Saldo restante: ${this.saldoConta}`;
  }
  addCarrinho (products: Products, client: string, compras: string): string{
    if(client != this.client){
      throw new Error('Cliente não pode comprar')
    }
    this.compras.push(products);
    return `Produto ${products} adicionado ao carrinho`
  }
}

