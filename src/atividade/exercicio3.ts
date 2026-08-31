export const ordenarDecrescente = (palavras: string[]): string[] => {
  return [...palavras].sort((a, b) => b.localeCompare(a));
};
