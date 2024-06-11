import ContaCorrente from "./entities/ContaCorrente"
import { ContaPoupança } from "./entities/ContaPoupança"



const newPoupança = new ContaPoupança('Lucas Poupança', '01239123', '0213', 'poupança', 1000)
const newPoupança2 = new ContaCorrente('Julia Corrente', '012391231', '02131', 'corrente', 1000)


newPoupança.depositar(1000)
newPoupança.getSaldo()

newPoupança2.depositar(1000)
newPoupança2.getSaldo()

try{
  newPoupança2.transferOtherAccount(200, newPoupança)
  console.log('Transferencia realizada com sucesso!')
}catch(error){
  console.error('Erro ao realizar transferência', error.message)
}



console.log('saldo final da conta poupança: ', newPoupança.getSaldo())
console.log('saldo final da conta corrente: ', newPoupança2.getSaldo())



