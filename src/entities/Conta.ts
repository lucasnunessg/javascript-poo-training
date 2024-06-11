export type TipoConta = 'corrente' | 'poupança' | 'debito' | 'salario'

export default class Conta {
protected titularidade: string;
 protected saldo: number = 0;
 private tipo: TipoConta;
 private agencia: string;
 protected nConta: string;

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

  getAgencia(){
    return this.agencia
  }

  getTipo(){
    return this.tipo
  }

  getNConta(){
    return this.nConta
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


