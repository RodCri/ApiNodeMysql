const suma = (a,b) => a+b;

const cheks = [
  {a: 0, b:1 ,result: 1},
  {a: 0, b:0 ,result: 10},
  {a: 10, b:-10 ,result: 0},
  {a: 2, b:-1 ,result: 1}
]

cheks.forEach(chek =>{
  const {a,b,result} = chek;

  console.assert(
    suma(a,b) === result,
    `Suma of ${a} y ${b} expected to be ${result}`
  )
});