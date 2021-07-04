//interface 가 있으면, 외부에서 이 stack안에 어떤 value들과 함수들이 있는지 몰라도, 이 interface만 보고도 소통 할수 있어요 :)c

interface Stack {
  readonly size: number; //readonly => 외부에서 변경할 수 없고, 내부에서 규정되어지는 값.
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  // next: StackNode | undefined; => optional
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: 0; // _를 사용하면 이 scope 내부 에서만 사영한다 라는 싸인 이에요
  private head?: StackNode

  constructor(private capacity: number){}
    get size() {
      return this._size;
    }

    push(value: string) {
      this._size++;
      const node: StackNode = { value, next: this.head };
      this.head = node;
    }
    pop(): string {
      if(this.head == null){
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
    
  }
 
  
}

const stack = new StackImpl();
stack.push('mina 1');
stack.push('bob 2');
stack.push('hoon 3');
while(stack.size !== 0){
  console.log(stack.pop());
}

