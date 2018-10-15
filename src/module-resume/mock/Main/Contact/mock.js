let language = localStorage.getItem("language");
let LanguageData = require(`./mock-${language}`);

export default LanguageData;