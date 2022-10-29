const questions = [
    "Digite um valor: ",
    "Escolha uma das operações aritméticas (+, -, *, /): ",
    "Digite outro valor: "
];

const ask = (index = 0) => {
    process.stdout.write(questions[index]);
}

ask();

const answers = [];
process.stdin.on('data', data => {
    if(answers.length === 1) {
        answers.push(data.toString().trim());
    } else {
        answers.push(Number.parseInt(data.toString()));
    }
    
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    process.stdout.write(`Cálculo: ${answers[0]} ${answers[1]} ${answers[2]}\n`);
    const calculadora = require('./modulos/calculadora');
    
    calculadora(answers[0], answers[1], answers[2]);
});
