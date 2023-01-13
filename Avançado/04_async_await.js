let accepted = true;
const promise = new Promise((resolve, reject) => {
    if(accepted) {
        return resolve('Ok');
    } else {
        return reject('Error');
    }
});

async function start() {
    try {
        const result = await promise;
        console.log(result);
    } catch(e) {
        console.log(e);
    } finally {
        console.log('Sempre roda');
    }
}

start();
