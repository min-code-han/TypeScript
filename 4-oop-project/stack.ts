//interface 가 있으면, 외부에서 이 stack안에 어떤 value들과 함수들이 있는지 몰라도, 이 interface만 보고도 소통 할수 있어요 :)c

interface Stack {
  readonly size: number; //readonly => 외부에서 변경할 수 없고, 내부에서 규정되어지는 값.
  push(value: string): void;
  pop(): string;
}

class StackImpl implements Stack{
  private _size: number; // _를 사용하면 이 scope 내부 에서만 사영한다 라는 싸인 이에요
  get size: (){
    return this._size;
  }
  push(value: string){
    this._size++;
  }
  pop(): string {
    this._size--;
  }
}