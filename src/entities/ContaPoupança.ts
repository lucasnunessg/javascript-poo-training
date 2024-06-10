import Conta, { TipoConta } from "./Conta";

export  class ContaPoupança extends Conta {
 
  rendimento: number = 0;

  constructor(titularidade: string, agencia: string, nConta: string, tipo: TipoConta, saldo: number){
    super(titularidade, agencia, nConta, tipo, saldo);

  }

  getRendimento(valor: number){

    this.saldo *= (1 + this.rendimento)

  }
    
  
}


