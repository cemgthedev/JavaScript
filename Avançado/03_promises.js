let accepted = false;

const promise = new Promise((resolve, reject) => {
    if(accepted) {
        return resolve('OK');
    } else {
        return reject('ERROR');
    }
});

promise.then(result => console.log(result))
       .catch(erro => console.log(erro))
       .finally(() => console.log('FIM'));
