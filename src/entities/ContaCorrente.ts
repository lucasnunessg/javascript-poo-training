import Conta, { TipoConta } from "./Conta";

export default class ContaCorrente extends Conta {
  private limite: number;

  constructor(titularidade: string, agencia: string, nConta: string, tipo: TipoConta, saldo: number, limite: number = 100 ){
    super(titularidade, agencia, nConta, 'corrente', saldo)
    this.limite = limite
  }

  sacar(valor: number) {
    if(this.saldo + this.limite < valor){
      throw new Error('Saldo e/ou limite insuficiente!')
    }
    this.saldo -= valor;
  }

  transferOtherAccount(valor: number, outraConta: Conta){
    if(outraConta.getNConta() === this.getNConta()){
      throw new Error('Não é possível transferir para a mesma conta')
    }
    this.sacar(valor)
    outraConta.depositar(valor);
  }
  
}