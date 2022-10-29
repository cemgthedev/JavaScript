function calculadora(a, operacao, b) {
    switch(operacao) {
        case '+':
            process.stdout.write(`Resultado da soma: ${a + b}\n`);
            break;
        case '-':
            process.stdout.write(`Resultado da subtração: ${a - b}\n`);
            break;
        case '*':
            process.stdout.write(`Resultado da multiplicação: ${a * b}\n`);
            break;
        case '/':
            if(b !== 0) {
                process.stdout.write(`Resultado da divisão: ${a / b}`);
            } else {
                process.stdout.write(`Não há divisão por zero`);
            }
    }
}

module.exports = calculadora;
