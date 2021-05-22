{
  //Type Assertion => 좋은건 아니에요
  //타입이 없는 JavaScript 와 연동할때 사용해요

  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();

  // 타입스크립트 에서는 타입을 지정해주지 않은 경우  any로 받아들이기 때문에
  // 이 갘은 경우 resul 에 .length 와 같은 문자열에 사용하는 API들을 사용할 수가 없어요
  // result.length
  // 이런경우 강제로(?) 내가 타입을 확신하는 경우에 이렇게 사용할수 있어요.length
  (result as string).length;
  (<string>result).length;
  // => 그런데 이건 정말 정말 타입을 확신할떄 !!

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //NOPE

  // 이부분에서 ! 는, 나는 이 function 의 return 값이 숫자 배열일 거라는 것을 완전히 확신해 라는 뜻 이에요.
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2);
}
