const Config = require('./Globals/Config');
const Strings = require('./Globals/Strings');

Config.currentLanguage = Config.availableLanguages.es;
console.log(Strings.getString('test'));