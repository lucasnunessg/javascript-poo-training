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
}
const newPoupança = new ContaPoupança('Lucas', '01239123', '0213', 'poupança', 1000)
const newPoupança2 = new ContaPoupança('Lucas', '01239123', '0213', 'poupança', 1000)
const newPoupança3 = new ContaPoupança('Lucas', '01239123', '0213', 'poupança', 1000)
const poupançaJulia = new ContaPoupança('Julia trindade', '8370', '32131', 'poupança', 9000)

poupançaJulia.depositar(2000)
poupançaJulia.calcularRendimento()
newPoupança.depositar(1000)
newPoupança2.depositar(1000)
newPoupança3.depositar(1000)

console.log(ContaPoupança.quantityAccounts);
console.log("Saldo da conta após depósito: ", poupançaJulia)
console.log("Rendimento", newPoupança.calcularRendimento());
console.log(newPoupança)



interface MyInterface {
  myNumber: number,
  myFunc(myParam: number): string 
}

export class MyClass implements MyInterface {
constructor(public myNumber: number){

}
  myFunc(myParam: number): string {
  return `myNumber + myParam: ${this.myNumber + myParam}`;
}
}

const myObject = new MyClass(4)
console.log('O resultado é: ', myObject)
