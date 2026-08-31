import { describe, expect, it } from 'vitest';
import { Livro, Curso } from './exercicio6';

describe('Exercício 6 - orientação a objetos e interfaces', () => {
  it('deve utilizar o método comum da interface com atributos diferentes', () => {
    const livro = new Livro('Clean Code', 450);
    const curso = new Curso('TypeScript', 8);

    livro.paginas = 520;
    curso.modulos = 12;

    expect(livro.resumo()).toBe('Livro: Clean Code - 520 páginas');
    expect(curso.resumo()).toBe('Curso: TypeScript - 12 módulos');
  });
});
