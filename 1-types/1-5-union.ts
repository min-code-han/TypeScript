{
  // Union Types (=or) 🎉 활용도 매우 높음
  // 발생할수 있는 모든 케이스 중에 하나만 할당 가능해요.
  // 딱 하나만 ! 오케?!
  type Direction = 'left'|'right'|'up'|'down';
  function move(direction:Direction){
    console.log(direction);
  }
  move('down')
  // 위에 정의된 4가지 타입만 받아올수 있음

  type TileSize = 3|5|7|10;
  const tile :TileSize = 3;
  //다른 숫자 입력하면 에러나요.

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

//어떤 타입이냐에 따라서 다르게 출력되는 로직을 만들어 보잣 :)
// function printLoginState(state:LoginState){
//   if('response' in state){
//     console.log(`🎉 ${state.response.body}`)
//   }else{
//     console.log(`🎉 ${state.reason}`)
//   }
// }




} 