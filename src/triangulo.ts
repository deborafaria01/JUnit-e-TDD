export class Triangulo {
  private a: number;
  private b: number;
  private c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  public tipoDeTriangulo(): string {
    if (this.ehValido()) {
      if (this.a === this.b && this.b === this.c) {
        return 'Equilátero';
      } else if (this.a === this.b || this.b === this.c || this.a === this.c) {
        return 'Isósceles';
      } else {
        return 'Escaleno';
      }
    }
    return 'Não é um triângulo';
  }

  private ehValido(): boolean {
    return (this.a + this.b > this.c) &&
           (this.a + this.c > this.b) &&
           (this.b + this.c > this.a);
  }
}
