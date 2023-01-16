const axios = require('axios');

async function randomAdvice() {
    try{
        const require = await axios.get('https://api.adviceslip.com/advice');
        console.log(require.data.slip.advice);
    } catch(e) {
        console.log(e);
    }
}

randomAdvice(); // retorna um conselho aleatório

async function searchAdvicies(keyWorld) {
    try {
        const require = await axios.get('https://api.adviceslip.com/advice/search/' + keyWorld);
        const resolve = require.data;
        if(resolve.hasOwnProperty('message')) {
            console.log(`Aviso: ${resolve.message.text}`);
        } else {
            const slips = resolve.slips;
            for(let i = 0; (i <= 5) && (i < slips.length); i++) {
                console.log(`${i + 1} Advice: ${slips[i].advice}`)
            }
        }
    } catch(e) {
            console.log(e);
    }
}

searchAdvicies('bad'); // retorna os 5 primeiros conselhos com uma palavra chave