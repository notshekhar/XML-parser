const fs = require("fs")

const { XMLparser, renderXML } = require("./index")

const xml = fs.readFileSync("test.xml", "utf-8")

const xmlData = XMLparser(xml)
console.log(xmlData)

const jsonXML = renderXML(xmlData)
console.log(jsonXML)
