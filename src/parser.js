// function parser(tokens) {
//     let root = {}
//     let counter = 0
//     let current_node = root
//     let prev_node = root
//     while (true) {
//         if (counter == tokens.length) break
//         let token = tokens[counter]
//         if (token.type == "tag") {
//             prev_node = current_node
//             current_node[token.value] = {}
//             if (tokens[counter + 1].type == "value") {
//                 current_node[token.value] = tokens[counter + 1].value
//                 current_node = prev_node
//                 counter++
//             } else if (tokens[counter + 1].type == "end-tag") {
//                 current_node[token.value] = null
//                 current_node = prev_node
//                 counter++
//             } else {
//                 current_node = current_node[token.value]
//             }
//         }
//         if (token.type == "end-tag") {
//             current_node = prev_node
//         }
//         counter++
//         // break
//     }
//     return root
// }

function new_parser(tokens){

}

module.exports = new_parser
