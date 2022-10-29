const questions = [
    "O que aprendi hoje ?",
    "O que me deixou aborrecido ?",
    "O que eu poderia fazer para melhorar ?",
    "Quantas pessoas eu ajudei ?"
];

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + ">");
}

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        console.log(answers);
        process.exit();
    }
});

process.on('exit', () => {
    console.log(`s
        Ok Eduardo!
        
        Hoje você aprendeu: ${answers[0]}
        
        O que te deixou aborrecido foi: ${answers[1]}
        
        O que você poderia fazer para melhorar: ${answers[2]}
        
        Você ajudou ${answers[3]} pessoas hoje.
        
        Volte amanhã para novas reflexões...       
    `);
});










