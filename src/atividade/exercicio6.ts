export interface Resumivel {
  resumo(): string;
}

export class Livro implements Resumivel {
  constructor(
    public titulo: string,
    public paginas: number,
  ) {}

  resumo(): string {
    return `Livro: ${this.titulo} - ${this.paginas} páginas`;
  }
}

export class Curso implements Resumivel {
  constructor(
    public nome: string,
    public modulos: number,
  ) {}

  resumo(): string {
    return `Curso: ${this.nome} - ${this.modulos} módulos`;
  }
}
