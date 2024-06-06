type ChavePix = 'CPF' | 'Telefone' | 'Email'

export default class Pix {
  saldo: number;
  chavePix: ChavePix;
  banco: string;

  constructor(saldo: number, chavePix: ChavePix = 'CPF', banco: string){
    this.saldo = saldo;
    this.chavePix = chavePix;
    this.banco = banco
  }

  getSaldo(){
    return this.saldo
  }

  transferir(destinoPix: Pix, valor: number) {
    if (destinoPix.chavePix === this.chavePix && destinoPix.banco === this.banco) {
      throw new Error('Não pode transferir para o mesmo pix');
    }
    this.sacar(valor);
    destinoPix.depositar(valor);
  }

  depositar(valor: number){
    if(valor <= 0) {
      throw new Error('Não pode fazer pix com valor negativo')
    }
    this.saldo += valor
  }

  sacar(valor: number){
    if(this.saldo <= 0 ){
      throw new Error('Saldo insuficiente ou negativo');
    }
  
    this.saldo -= valor
  }
}