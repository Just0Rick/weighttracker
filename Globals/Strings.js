const StringManager = require('./StringManager');

// ADD the strings here

const stringValues = [
    {key: "helloWorld", en: "Hello World!", es: "Hola Mundo!"},
];

// --------------------

for(let i = 0; i < stringValues.length; i++){
    StringManager.addString(stringValues[i].key, {
        'en': stringValues[i].en,
        'es': stringValues[i].es
    });
}

module.exports = StringManager;