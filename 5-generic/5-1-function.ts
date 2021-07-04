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





}