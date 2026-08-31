import { describe, expect, it } from 'vitest';
import { concatenarStrings } from './exercicio2';

describe('Exercício 2 - concatenação de strings', () => {
  it('deve concatenar as palavras com espaço', () => {
    expect(concatenarStrings(['Arrays', 'com', 'TypeScript'])).toBe('Arrays com TypeScript');
  });
});
