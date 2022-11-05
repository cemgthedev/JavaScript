const { inherits } = require('util');       // por meio desta função faremos uma função própria herdar de EventEmitter
const { EventEmitter } = require('events'); // EventEmitter utilizada para escutar (on) e emitir (emit) eventos

function mensagem() {
    process.stdout.write("Digite \"exit\" para sair!");
    process.stdout.write("Digite um comando > ");
}

// definindo funções construtoras
function Controle(comando) {
    this.comando = comando;
}

function Carro(comando) {
    this.comando = comando;
}

function Aviao(comando) {
    this.comando = comando;
}

function Barco(comando) {
    this.comando = comando;
}

// fazendo as funções herdarem de EventEmitter
inherits(Controle, EventEmitter);
inherits(Carro, EventEmitter);
inherits(Aviao, EventEmitter);
inherits(Barco, EventEmitter);

// estanciando Controle
const controleRemoto = new Controle("mover-se");

// função que recebe um comando, executa as funções construtoras, as faz escutar uma vez(once) o evento desparado (emit)
function run(comando) {
    const carro = new Carro(comando);
    carro.once(carro.comando, () => {
        switch(carro.comando) {
            case 'mover-se':
                process.stdout.write("O carro acelerou...");
        }
    })
    carro.emit(carro.comando);
    
    const aviao = new Aviao(comando);
    aviao.once(aviao.comando, () => {
        switch(aviao.comando) {
            case 'mover-se':
                process.stdout.write("O avião voou...");
        }
    })
    aviao.emit(aviao.comando);
    
    const barco = new Barco(comando);
    barco.once(barco.comando, () => {
        switch(barco.comando) {
            case 'mover-se':
                process.stdout.write("O barco navegou...");
        }
    })
    barco.emit(barco.comando);
}

mensagem();

// escutando entrada de dados
process.stdin.on('data', data => {
    let comando = data.toString().trim();
    if(comando === "exit") {
        process.exit();
    } else {
        // a cada comando o controle remoto deve escutar um único sinal (once)
        controleRemoto.once(comando, () => {
            run(comando);
        })
        
        // executa o evento
        controleRemoto.emit(comando);
    }
    mensagem();
})

/*
    Conclusão: ao trabalhar com eventos pense nos seguintes aspectos:
        -> Quais eventos haverá ?
        -> Como eles se comunicarão ?
        -> De que forma se comunicarão ? Evento x escuta uma única vez(once) ? ou em loop (on) ?...
*/
