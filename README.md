# XMLparser

Simple non-compiant XML parser because we just need to parse some basic responses and libxml takes forever to compile :D you probably don't want to use this unless you also have similar needs.

## Installation:

```
$ npm install xml-parser
```

## Example

```js
const fs = require("fs")
const XMLparse = require("xmlparser2")
const xml = fs.readFileSync("example.xml", "utf8")

const obj = XMLparse(xml)
```

XML:

```xml
<students>
 <student>
   <name>Rick Grimes</name>
   <age>35</age>
   <subject>Maths</subject>
   <gender>Male</gender>
 </student>
</students>
```

Yields:

```json
{
    "students": {
        "student": {
            "name": "Rick Grimes",
            "age": "35",
            "subject": "Maths",
            "gender": "Male"
        }
    }
}
```

## Download

If you want to use this library you can download [v1.2.0](https://www.npmjs.com/package/xmlparser2) here or check the release tab of this repository.
