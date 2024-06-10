import Conta, { TipoConta } from "./Conta";

export  class ContaPoupança extends Conta {
 
  rendimento: number = 0;

  constructor(titularidade: string, agencia: string, nConta: string, tipo: TipoConta, saldo: number){
    super(titularidade, agencia, nConta, tipo, saldo);

  }

  sacar(valor: number){
    if(valor <= 0 || valor > this.saldo) {
    throw new Error('Não pode sacar abaixo do saldo')
    }
    super.sacar(valor);
  }

  getRendimento(valor: number){
    this.saldo *= (1 + this.rendimento)
  }

  
}

const newPoupança = new ContaPoupança('Lucas', '01239123', '0213', 'poupança', 1000)
newPoupança.depositar(1000)
newPoupança.sacar(2001)
console.log(newPoupança)


