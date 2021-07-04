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
  function checkNotNull(arg: number | null): number {
    if(arg == null ){
      throw new Error('not valid number');
    }
    return arg;
  }
  checkNotNull(321);
  checkNotNull(null); // 그런데 지금 이 함수는 number만 확인 할 수 있어요.
}