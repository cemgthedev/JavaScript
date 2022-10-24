const getFlagValue = require("./01_proprios_modulos/getFlagValue");

console.log(`Oi, meu nome é ${getFlagValue("--nome")} e tenho ${getFlagValue("--idade")} anos de idade`);