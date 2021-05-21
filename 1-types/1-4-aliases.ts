{
  // Type Aliases 는 말 그대로 새로운 타입으로 정의할수 있다는 뜻.

  type Text = string;
  const name :string = 'ellie';
  const  address:Text = 'KOREA';

  type Num = number;

  type Student = {
    name:string;
    age: number;
  }
  const student = {
    name:"mina",
    age:27
  }

  //String Literal Types
  // 타입을 문자열로도 지정해줄수 있어요
  type Name = 'name';
  let minaName:Name;
  minaName = 'name';
  
}