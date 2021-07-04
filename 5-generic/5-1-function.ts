// {
//   function checkNotNullBad(arg: number | null): number {
//     if (arg == null) {
//       throw new Error('not valid number!');
//     }
//     return arg;
//   }

//   function checkNotNullAnyBad(arg: any | null): any {
//     if (arg == null) {
//       throw new Error('not valid number!');
//     }
//     return arg;
//   }
//   const result = checkNotNullAnyBad(123);

//   function checkNotNull<T>(arg: T | null): T {
//     if (arg == null) {
//       throw new Error('not valid number!');
//     }
//     return arg;
//   }
//   const number = checkNotNull(123);
//   const boal: boolean = checkNotNull(true);
// }

{
  function checkNotNullBad(arg: number | null): number {
    if(arg == null ){
      throw new Error('not valid number');
    }
    return arg;
  }
  checkNotNullBad(321);
  checkNotNullBad(null); // 그런데 지금 이 함수는 number만 확인 할 수 있어요.


  function checkNotNullAnyBad (arg: any | null): any{
    if(arg == null ){
      throw new Error('not valid number');
    }
    return arg; 
  } 
  const result = checkNotNullAnyBad(123);
  // 이 함수의 경우는 타입이 보장이 되지 않아요..! result가 any가 되어 버려요.=> 타입이 안전하지가 않아요.

  //이럴때 사용 하는 것이 바로 GENERIC 🎉!!
  // GENERIC은 어떤 타입 이던지 받을수 있고, 코딩을 할때, 사용할때 타입이 정해지기 때문에 타입을 보장 맏을수 있어ㅏ요.

  function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123); // 이 시점에 타입이 정해져요.
  const bool: boolean = checkNotNull(true); // 이렇게 하면 타입이 더 정확 하겠죠??
  //어떤 인자를 전달 하던지, null이 아닌겅우에만 똑같은 타입을 전달 하는 함수에요.





}