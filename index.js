const Tokenizer = require("./src/tokenizer")
const Parser = require("./src/parser")

function XMLparser(code) {
    return Parser(Tokenizer(code))
}

// window.XMLparser = XMLparser
module.exports = {
    XMLparser,
    renderXML: require("./src/renderer"),
}
