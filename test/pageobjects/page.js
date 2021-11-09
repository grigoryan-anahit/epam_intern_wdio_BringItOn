
module.exports = class Page {
    open (path) {
        return browser.url(`https://pastebin.com/`)
    }
}
