{
  //Array
  const fruits: string[] = ['🍏','🍎','🍐','🍊']; // 이 방법을 더 선호
  const scores: Array<number> = [1,2,3];
  //readonly => 데이터를 읽을수만 있음(push 이런거 노노)
  //오브젝트의 불변성을 보장.
  function printArray(fruits: readonly string[]){}

  //Tuple => interface ,type alias, class 로 변경하여 사용하는 것을 권장 !!
  //서로 다른 데이터를 담을수가 있음
  //권장하지 않아요.
  let student:[string,number];
  student = ['name',123];
  student[0] // name

  const [name,age] = student;
  // 이렇게 하면 그래도 좀더 정확하게 어떤 데이터나 담겨있는지 알 수 있음

  





}
