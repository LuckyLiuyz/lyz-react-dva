export default function initLanguageByRoute( route ){
    const language = localStorage.getItem("language");
    const LanguageData = require.context(route, true, /\.json$/);
    let a = LanguageData();
    return LanguageData();
}