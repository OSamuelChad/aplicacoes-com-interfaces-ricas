import { describe, expect, it } from 'vitest';
import { extrairDoisPrimeiros } from './exercicio4';

describe('Exercício 4 - extração dos primeiros elementos', () => {
  it('deve retornar os dois primeiros elementos', () => {
    expect(extrairDoisPrimeiros([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
  });
});
