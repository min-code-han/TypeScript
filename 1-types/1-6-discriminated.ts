{
  //discriminated 차별화 하는, 구분할수 있는
  type SucessState = {
    result:'sucess';
    response:{
      body:string;
    }
  }
  type FailState = {
    result:'fail';
    reason:string;
  }
  type LoginState = SucessState|FailState;
  
  function login():LoginState{
    return{
      result:'sucess',
      response:{
        body:"logged in !"
      },
    };
  }
  
  //어떤 타입이냐에 따라서 다르게 출력되는 로직을 만들어 보잣 :)
  function printLoginState(state:LoginState){
    //state.result sucess 일 수도 있고 fail 일 수도 있지만, result라는 값을 공통적으로 가지고 있기 때문에 ! result로 접근할수 있음 !
    if(state.result === 'sucess'){
      console.log(`🎉 ${state.response.body}`)
    }else{
      console.log(`🎉 ${state.reason}`)
    }
  }

  // Discriminated Union
  //이렇게 사용하면 더 직관적으로 사용할수 있음.
  // 공통적으로 가지고 있는 속성을 가지고 차별화 한다 ~~

}