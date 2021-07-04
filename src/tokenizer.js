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
            if (code[counter] == "!" || code[counter] == "?") {
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
                if (c == " ") break
                word += c
                counter++
            }
            tokens.push(new Token("tag", word))
            //adding attribute
            function addAttribute() {
                word = ""
                while (c != "=") {
                    word += c
                    counter++
                    c = code[counter]
                }
                let tagClose = word
                tokens.push(new Token("tag", word))
                counter++
                let open = code[counter]
                counter++
                c = code[counter]
                word = ""
                while (c != open) {
                    word += c
                    counter++
                    c = code[counter]
                }
                tokens.push(new Token("value", word))
                tokens.push(new Token("end-tag", tagClose))
            }
            if (c == " ") {
                tokens.push(new Token("tag", "$"))
                counter++
                c = code[counter]
                // console.log(c)
                while (code[counter] != ">") {
                    c = code[counter]
                    if (c == " " || c == "\n" || c == "\t" || c == "\r") {
                        counter++
                        continue
                    }
                    addAttribute()
                    counter++
                }
                tokens.push(new Token("end-tag", "$"))
            }
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

module.exports = lexer
