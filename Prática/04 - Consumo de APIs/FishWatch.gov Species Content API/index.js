const axios = require('axios');

async function getAllSpecies() {
    try {
        const response = await axios.get('https://www.fishwatch.gov/api/species');
        console.log(response.data);
    } catch(e) {
        console.log(e);
    }
}

// getAllSpecies();

async function searchSpecie(specie) {
    try {
        const response = await axios.get('https://www.fishwatch.gov/api/species/' + specie);
        console.log(response.data);
    } catch(e) {
        console.log(e);
    }
}

const specie = "red-snapper";

searchSpecie(specie);