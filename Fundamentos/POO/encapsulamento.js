class Poligono {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area() {
        return this.#calcularArea();
    }

    #calcularArea() {
        return this.altura * this.largura;
    }
}

let poligono = new Poligono(50, 50);
console.log(poligono);