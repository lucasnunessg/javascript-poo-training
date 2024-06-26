export type CarroCompras = string[]

export type Products = 'Livro' | 'Jornal' | 'Informática'

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
