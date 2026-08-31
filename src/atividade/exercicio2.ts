export const concatenarStrings = (palavras: string[]): string => {
  const separador = (() => ' ')();
  return palavras.join(separador);
};
