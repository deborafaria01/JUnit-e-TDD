import { Triangulo } from '../src/triangulo';

describe('Testando o tipo de triângulo', () => {

  test('Triângulo escaleno válido', () => {
    const triangulo = new Triangulo(3, 4, 5);
    expect(triangulo.tipoDeTriangulo()).toBe('Escaleno');
  });

  test('Triângulo isósceles válido - 1', () => {
    const triangulo = new Triangulo(5, 5, 8);
    expect(triangulo.tipoDeTriangulo()).toBe('Isósceles');
  });

  test('Triângulo isósceles válido - 2', () => {
    const triangulo = new Triangulo(5, 8, 5);
    expect(triangulo.tipoDeTriangulo()).toBe('Isósceles');
  });

  test('Triângulo isósceles válido - 3', () => {
    const triangulo = new Triangulo(8, 5, 5);
    expect(triangulo.tipoDeTriangulo()).toBe('Isósceles');
  });

  test('Triângulo equilátero válido', () => {
    const triangulo = new Triangulo(5, 5, 5);
    expect(triangulo.tipoDeTriangulo()).toBe('Equilátero');
  });

  test('Um valor zero', () => {
    const triangulo = new Triangulo(0, 4, 5);
    expect(triangulo.tipoDeTriangulo()).toBe('Não é um triângulo');
  });

  test('Um valor negativo', () => {
    const triangulo = new Triangulo(-1, 4, 5);
    expect(triangulo.tipoDeTriangulo()).toBe('Não é um triângulo');
  });

  test('A soma de 2 lados é igual ao terceiro lado - 1', () => {
    const triangulo = new Triangulo(3, 5, 8);
    expect(triangulo.tipoDeTriangulo()).toBe('Não é um triângulo');
  });

  test('A soma de 2 lados é igual ao terceiro lado - 2', () => {
    const triangulo = new Triangulo(5, 3, 8);
    expect(triangulo.tipoDeTriangulo()).toBe('Não é um triângulo');
  });

  test('A soma de 2 lados é igual ao terceiro lado - 3', () => {
    const triangulo = new Triangulo(8, 3, 5);
    expect(triangulo.tipoDeTriangulo()).toBe('Não é um triângulo');
  });

  test('A soma de 2 lados é menor que o terceiro lado - 1', () => {
    const triangulo = new Triangulo(2, 3, 6);
    expect(triangulo.tipoDeTriangulo()).toBe('Não é um triângulo');
  });

  test('A soma de 2 lados é menor que o terceiro lado - 2', () => {
    const triangulo = new Triangulo(6, 2, 3);
    expect(triangulo.tipoDeTriangulo()).toBe('Não é um triângulo');
  });

  test('A soma de 2 lados é menor que o terceiro lado - 3', () => {
    const triangulo = new Triangulo(3, 6, 2);
    expect(triangulo.tipoDeTriangulo()).toBe('Não é um triângulo');
  });

  test('Todos os três valores iguais a zero', () => {
    const triangulo = new Triangulo(0, 0, 0);
    expect(triangulo.tipoDeTriangulo()).toBe('Não é um triângulo');
  });
});
