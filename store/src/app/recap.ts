const username: string = 'rohwinu';
const sum =(a:number, b:number) =>{
  return a+b;
}
sum(1,2);

/*
class Person{
  age: number;
  lastname: string;

  constructor(age:number, lastname:string){
    this.age = age;
    this.lastname = lastname;
  }
}
*/

class Person{
  constructor(public age:number, public lastname:string){}
}

const nico = new Person(15,'urazan');
