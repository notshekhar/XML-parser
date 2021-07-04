function Stack() {
    this.arr = new Array()
    this.push = (el) => this.arr.unshift(el)
    this.pop = () => this.arr.shift()
}

function parser(tokens) {
    const depth = new Stack()
    const root = {}
    let counter = 0
    let current_node = root
    while (true) {
        if (counter == tokens.length) break
        let token = tokens[counter]
        if (token.type == "tag") {
            depth.push(current_node)
            let a = {}
            if (current_node[token.value]) {
                if (current_node[token.value] instanceof Array) {
                    current_node[token.value].push(a)
                } else {
                    let temp = current_node[token.value]
                    current_node[token.value] = []
                    current_node[token.value].push(temp)
                    current_node[token.value].push(a)
                }
            } else {
                current_node[token.value] = a
            }
            if (tokens[counter + 1].type == "value") {
                current_node[token.value] = tokens[counter + 1].value
                counter++
            } else if (tokens[counter + 1].type == "end-tag") {
                current_node[token.value] = null
                counter++
            } else current_node = a
        }
        if (token.type == "end-tag") {
            current_node = depth.pop()
            // console.log(current_node)
        }
        counter++
        // break
    }
    return root
}

module.exports = parser
