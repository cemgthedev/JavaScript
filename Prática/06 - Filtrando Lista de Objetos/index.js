const products = [
    {
        id: 1,
        title: 'Carro de controle remoto',
        price: 234.5,
        rating: 4
    },
    {
        id: 2,
        title: 'Avião de controle remoto',
        price: 340.5,
        rating: 5
    },
    {
        id: 3,
        title: 'Coleção ben 10',
        price: 84.5,
        rating: 3.4
    },
    {
        id: 4,
        title: 'Bicicleta',
        price: 904.5,
        rating: 4.5
    },
    {
        id: 5,
        title: 'Carro hot weels',
        price: 90.5,
        rating: 1
    },
];

console.log("Produtos ordenados por rating:");
console.log("Ordem Crescente: " + JSON.stringify(products.sort((fst, snd) => fst.rating - snd.rating)));
console.log("Ordem Decrescente: " + JSON.stringify(products.sort((fst, snd) => snd.rating - fst.rating)));