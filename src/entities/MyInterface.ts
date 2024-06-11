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
