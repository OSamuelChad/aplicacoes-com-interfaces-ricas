export const quadradoComFor = (numeros: number[]): number[] => {
  const resultado: number[] = [];

  for (let i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] * numeros[i]);
  }

  return resultado;
};

export const quadradoComForEach = (numeros: number[]): number[] => {
  const resultado: number[] = [];

  numeros.forEach((numero) => {
    resultado.push(numero * numero);
  });

  return resultado;
};
