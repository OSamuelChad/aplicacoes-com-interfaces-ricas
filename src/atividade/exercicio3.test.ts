import { describe, expect, it } from 'vitest';
import { ordenarDecrescente } from './exercicio3';

describe('Exercício 3 - ordenação decrescente', () => {
  it('deve ordenar os elementos em ordem decrescente', () => {
    expect(ordenarDecrescente(['carro', 'boneco', 'ave', 'lapis'])).toEqual(['lapis', 'carro', 'boneco', 'ave']);
  });
});
