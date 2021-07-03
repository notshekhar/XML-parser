function Token(type, value) {
    this.type = type
    this.value = value
}

function lexer(code) {
    const tokens = new Array()
    let codeLength = code.length
    let word = ""
    let counter = 0
    while (true) {
        if (counter == codeLength) break
        let c = code[counter]
        if (c == " " || c == "\n" || c == "\t" || c == "\r") {
            counter++
            continue
        }
        if (c == "<") {
            word = ""
            counter++
            if (code[counter] == "!") {
                while (code[counter] != ">") counter++
                counter++
                continue
            }
            if (code[counter] == "/") {
                counter++
                while (code[counter] != ">") {
                    c = code[counter]
                    word += c
                    counter++
                }
                tokens.push(new Token("end-tag", word))
                counter++
                continue
            }
            while (code[counter] != ">") {
                c = code[counter]
                word += c
                counter++
            }
            tokens.push(new Token("tag", word))
            counter++
            continue
        } else {
            word = ""
            while (code[counter] != "<") {
                c = code[counter]
                word += c
                counter++
            }
            tokens.push(new Token("value", word))
            continue
        }
        counter++
    }
    return tokens
}

function parser(tokens) {
    let root = {}
    let counter = 0
    let current_node = root
    let prev_node = root
    while (true) {
        if (counter == tokens.length) break
        let token = tokens[counter]
        if (token.type == "tag") {
            prev_node = current_node
            current_node[token.value] = {}
            if (tokens[counter + 1].type == "value") {
                current_node[token.value] = tokens[counter + 1].value
                current_node = prev_node
                counter++
            } else if (tokens[counter + 1].type == "end-tag") {
                current_node[token.value] = null
                current_node = prev_node
                counter++
            } else {
                current_node = current_node[token.value]
            }
        }
        if (token.type == "end-tag") {
            current_node = prev_node
        }
        counter++
        // break
    }
    return root
}

function XMLparser(code) {
    return parser(lexer(code))
}

module.exports = XMLparser
