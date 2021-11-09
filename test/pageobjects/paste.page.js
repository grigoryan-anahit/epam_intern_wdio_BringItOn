const Page = require('./page');

class PastePage extends Page {

    get newPasteTextArea () { return $('#postform-text') }
    get syntaxHighlighting () { return $$('.select2-selection__arrow')[0] }
    get syntaxHighLightUl(){return $$('#select2-postform-format-results')[1]}
    get pasteExpiration () { return $$('.select2-selection__arrow')[1] }
    get pasteNameTitle () {return $('#postform-name')}
    get savePasteBtn () {return $('[class=\'btn -big\']') }
    get ul () {return $('[class=\'select2-results__options\']')}
    get bash () {return $('.btn -small h_800')}
    get pastedText () {return $('.source')}
}

module.exports = new PastePage();
