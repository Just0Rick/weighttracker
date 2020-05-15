const Config = require('./Config');

class StringManager{
    constructor(availableLangs){
        this.availableLangs = availableLangs;
        let temporary = Object.getOwnPropertyNames(availableLangs);
        this.hashTable = {};
        for(let i = 0; i < temporary.length; i++){
            this.hashTable[temporary[i]] = {};
        }
    }

    addString(key, stringObj){
        let langs = Object.getOwnPropertyNames(stringObj);
        for(let i = 0; i < langs.length; i++){
            this.hashTable[langs[i]][key] = stringObj[langs[i]];
        }
    }

    getString(key){
        let lang = Config.currentLanguage;
        if(Object.getOwnPropertyNames(this.hashTable).includes(lang) && 
        Object.getOwnPropertyNames(this.hashTable[lang]).includes(key)){
            return this.hashTable[lang][key];
        } else {
            if(Object.getOwnPropertyNames(this.hashTable['en']).includes(key)){
                return this.hashTable['en'][key];
            } else {
                console.error("- - - ERROR: The requested key does not exist! - - -");
                return key;
            }
        }
    }
}

module.exports = new StringManager(Config.availableLanguages);