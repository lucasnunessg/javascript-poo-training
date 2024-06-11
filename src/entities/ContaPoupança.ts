import Conta, { TipoConta } from "./Conta";


export  class ContaPoupança extends Conta {
  static quantityAccounts = 0;
  private rendimento: number = 0.1;

  constructor(titularidade: string, agencia: string, nConta: string, tipo: TipoConta, saldo: number){
    super(titularidade, agencia, nConta, tipo, saldo);
    ContaPoupança.quantityAccounts = ContaPoupança.quantityAccounts+ 1;

  }

  sacar(valor: number){
    if(valor <= 0 || valor > this.saldo) {
    throw new Error('Não pode sacar abaixo do saldo')
    }
    super.sacar(valor);
  }

  calcularRendimento(){
    const rendimento = this.saldo * this.rendimento;
    this.depositar(rendimento); 
    return rendimento; 
  }

  transferOtherAccount(valor: number, outraConta: Conta){
    if(outraConta.getNConta() === this.getNConta()){
      throw new Error('Não é possível transferir para a mesma conta')
    }
    this.sacar(valor)
    outraConta.depositar(valor);
  }
}




//interface  Banco {
 // myNumber: number,
 // myFunc(myParam: number): string 
//}

//export class SomaBanco implements Banco {
//constructor(public myNumber: number){
//
//}
 // myFunc(myParam: number): string {
  //return `myNumber + myParam: ${this.myNumber + myParam}`;
//}
//}

//const myObject = new SomaBanco(4)
//console.log('O resultado é: ', myObject)
