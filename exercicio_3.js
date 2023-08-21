class FormaGeometrica {
    constructor(tipo) {
        this.tipo = tipo;
    }
  
    calcularArea() {
        
    }
  
    calcularPerimetro() {
        
    }
}
  
class Quadrado extends FormaGeometrica {
    constructor(lado) {
        super('quadrado');
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
  
    calcularPerimetro() {
        return 4 * this.lado;
    }
}
  
class Circulo extends FormaGeometrica {
    constructor(raio) {
        super('circulo');
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
  
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
  
class Triangulo extends FormaGeometrica {
    constructor(base, altura, lado1, lado2, lado3) {
        super('triangulo');
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
  
    calcularPerimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
}
  
// Exemplo de uso
const quadrado = new Quadrado(5);
console.log('Área do quadrado:', quadrado.calcularArea());
console.log('Perímetro do quadrado:', quadrado.calcularPerimetro());
  
const circulo = new Circulo(3);
console.log('Área do círculo:', circulo.calcularArea());
console.log('Perímetro do círculo:', circulo.calcularPerimetro());
  
const triangulo = new Triangulo(4, 6, 3, 4, 5);
console.log('Área do triângulo:', triangulo.calcularArea());
console.log('Perímetro do triângulo:', triangulo.calcularPerimetro());