//  Type Inference
let text = 'hello'; // 타입스크립트 에서 자동적으로 문자열로 인지

function print(message: string) {
  console.log(message);
}

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
