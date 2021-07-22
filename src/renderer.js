function renderXML(json) {
    let xml = ""
    function f(json, depth = 0) {
        for (let key in json) {
            if (key == "$") continue

            if (Array.isArray(json[key])) {
                for (let el of json[key]) {
                    let obj = {}
                    obj[key] = el
                    f(obj, depth)
                }
                continue
            }
            xml += `\n${new Array(depth).fill(" ").join(" ")}<${key} ${
                json[key].$
                    ? Object.entries(json[key].$)
                          .map((e) => `${e[0]}='${e[1]}'`)
                          .join(" ")
                    : "\b"
            }>`
            if (typeof json[key] == "object") f(json[key], depth + 1)
            else if (typeof json[key] == "string")
                xml +=
                    "\n" + new Array(depth + 1).fill(" ").join(" ") + json[key]

            xml += `\n${new Array(depth).fill(" ").join(" ")}</${key}>`
        }
    }
    f(json)
    return xml
}

module.exports = renderXML
