const random = (number, Math) =>
    Math.floor(Math.random() * number);

const fatorial = x => {
    if(x === 0) {
        return 1;
    }

    return x * fatorial(x - 1);
}