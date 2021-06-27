//interface 가 있으면, 다른 개발자 들이 이 stack안에 어떤 value들과 함수들이 있는지 몰라도, 이 interface만 보고도 소통 할수 있어요 :)c

interface Stack {
  readonly size: number; //readonly => 외부에서 변경할 수 없고, 내부에서 규정되어지는 값.
  push(value: string): void;
  pop(): string;
}
