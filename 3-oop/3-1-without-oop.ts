// {
//   type CoffeeCup = {
//     shots: number;
//     hasMilk: boolean;
//   };

//   const BEANS_GRAMM_PER_SHOT: number = 7;

//   let coffeeBeans: number = 0;
//   function makeCoffee(shots: number): CoffeeCup {
//     if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
//       throw new Error('Not enough coffee beans!');
//     }
//     coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
//     return {
//       shots,
//       hasMilk: false,
//     };
//   }

//   coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
//   const coffee = makeCoffee(2);
//   console.log(coffee);
// }

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not Enough Coffee Beans !');
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots: shots, // key와 value가 동일 하다면 사실 그냥 shots, 라고만 싸줘도 됨
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
}
