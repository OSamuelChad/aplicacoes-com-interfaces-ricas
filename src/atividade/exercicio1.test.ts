import { describe, expect, it } from 'vitest';
import { quadradoComFor, quadradoComForEach } from './exercicio1';

describe('Exercício 1 - elevar elementos ao quadrado', () => {
  it('deve calcular o quadrado com for', () => {
    expect(quadradoComFor([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
  });

  it('deve calcular o quadrado com forEach', () => {
    expect(quadradoComForEach([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
  });
});
