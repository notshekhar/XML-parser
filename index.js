const Tokenizer = require("./src/tokenizer")
const Parser = require("./src/parser")

function XMLparser(code) {
    return Parser(Tokenizer(code))
}

if (typeof module !== "undefined") {
    module.exports = XMLparser
} else {
    window.XMLparser = XMLparser
}