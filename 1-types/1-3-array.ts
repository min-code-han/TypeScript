{
  //Array
  const fruits: string[] = ['π','π','π','π']; // μ΄ λ°©λ²μ λ μ νΈ
  const scores: Array<number> = [1,2,3];
  //readonly => λ°μ΄ν°λ₯Ό μ½μμλ§ μμ(push μ΄λ°κ±° λΈλΈ)
  //μ€λΈμ νΈμ λΆλ³μ±μ λ³΄μ₯.
  function printArray(fruits: readonly string[]){}

  //Tuple => interface ,type alias, class λ‘ λ³κ²½νμ¬ μ¬μ©νλ κ²μ κΆμ₯ !!
  //μλ‘ λ€λ₯Έ λ°μ΄ν°λ₯Ό λ΄μμκ° μμ
  //κΆμ₯νμ§ μμμ.
  let student:[string,number];
  student = ['name',123];
  student[0] // name

  const [name,age] = student;
  // μ΄λ κ² νλ©΄ κ·Έλλ μ’λ μ ννκ² μ΄λ€ λ°μ΄ν°λ λ΄κ²¨μλμ§ μ μ μμ

  





}
