const Tokenizer = require("./src/tokenizer")
const Parser = require("./src/parser")

function XMLparser(code) {
    return Parser(Tokenizer(code))
}

module.exports = XMLparser
