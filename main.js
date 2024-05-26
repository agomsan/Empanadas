export const fn = (a, b, c) => {
  const NumberEmpanadas = a + b + c;

  if (a < 0 || b < 0 || c < 0)
    console.log("No se aceptan numeros inferiores a 0");

  if (NumberEmpanadas % 3)
    console.log("La suma debe ser siempre múltiplo de 3");

  if (NumberEmpanadas > 40) console.log("La suma no debe ser mayor a 40");

  const Total = a * 12 + b * 14 + c * 16;
  return Math.ceil(Total / 3);
};

console.log(fn(1, 1, 1)); //14
console.log(fn(3, 3, 0)); //26
console.log(fn(2, 0, 1)); //14
console.log(fn(9, 10, 11)); //142
console.log(fn(11, 10, 9)); //139
