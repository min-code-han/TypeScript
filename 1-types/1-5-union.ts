{
  // Union Types (=or) π νμ©λ λ§€μ° λμ
  // λ°μν μ μλ λͺ¨λ  μΌμ΄μ€ μ€μ νλλ§ ν λΉ κ°λ₯ν΄μ.
  // λ± νλλ§ ! μ€μΌ?!
  type Direction = 'left'|'right'|'up'|'down';
  function move(direction:Direction){
    console.log(direction);
  }
  move('down')
  // μμ μ μλ 4κ°μ§ νμλ§ λ°μμ¬μ μμ

  type TileSize = 3|5|7|10;
  const tile :TileSize = 3;
  //λ€λ₯Έ μ«μ μλ ₯νλ©΄ μλ¬λμ.

//  type isSucess = 'sucess'|'fail';
//  function LOGIN (login:isSucess){
//    if ('sucess'){
//      console.log("give me User's data")
//    }
//    else if('fail'){
//      console.log('try again :)')
//    }
//  }
//  LOGIN('fail')
type SucessState = {
  response:{
    body:string;
  }
}
type FailState = {
  reason:string;
}
type LoginState = SucessState|FailState;

// function login():LoginState{
//   return{
//     response:{
//       body:"logged in !"
//     },
//   };
// }

//μ΄λ€ νμμ΄λμ λ°λΌμ λ€λ₯΄κ² μΆλ ₯λλ λ‘μ§μ λ§λ€μ΄ λ³΄μ£ :)
// function printLoginState(state:LoginState){
//   if('response' in state){
//     console.log(`π ${state.response.body}`)
//   }else{
//     console.log(`π ${state.reason}`)
//   }
// }




} 