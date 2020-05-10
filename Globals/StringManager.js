const Config = require('./Config');

class StringManager{
    constructor(availableLangs){
        this.availableLangs = availableLangs;
        this.hashTable = {};
        for(let i = 0; i < availableLangs.length; i++){
            this.hashTable[availableLangs[i]] = {};
        }
    }

    addString(key, stringObj){
        let langs = Object.getOwnPropertyNames(stringObj);
        for(let i = 0; i < langs.length; i++){
            this.hashTable[langs[i]][key] = stringObj[langs[i]];
        }
    }

    getString(key, lang){
        if(Object.getOwnPropertyNames(this.hashTable).includes(lang) && 
        Object.getOwnPropertyNames(this.hashTable[lang]).includes(key)){
            return this.hashTable[lang][key];
        } else {
            if(Object.getOwnPropertyNames(this.hashTable['en']).includes(key)){
                return this.hashTable['en'][key];
            } else {
                throw new Error('La clave solicitada no existe!');
            }
        }
    }
}

module.exports = new StringManager(Config.availableLanguages);