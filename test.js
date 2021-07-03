const fs = require("fs")

const XMLparser = require("./index")

const file = fs.readFileSync("test.xml")
const xml = file.toString()

const xmlData = XMLparser(xml)
console.log(xmlData)