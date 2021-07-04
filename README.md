# XMLparser

Simple non-compiant XML parser because we just need to parse some basic responses and libxml takes forever to compile :D you probably don't want to use this unless you also have similar needs.

## Installation:

```
$ npm install xmlparser2
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
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
  <breakfast_menu att1="37" att2="21">
    <food>
      <name>Belgian Waffles</name>
      <price>$5.95</price>
      <description>
   Two of our famous Belgian Waffles with plenty of real maple syrup
   </description>
      <calories>650</calories>
    </food>
    <food>
      <name>Berry-Berry Belgian Waffles</name>
      <price>$8.95</price>
      <description>
    Belgian waffles covered with assorted fresh berries and whipped cream
    </description>
      <calories>900</calories>
    </food>
    <food>
      <name>French Toast</name>
      <price>$4.50</price>
      <description>
    Thick slices made from our homemade sourdough bread
    </description>
      <calories>600</calories>
    </food>
    <food>
      <name>Homestyle Breakfast</name>
      <price>$6.95</price>
      <description>
    Two eggs, bacon or sausage, toast, and our ever-popular hash browns
    </description>
      <calories>950</calories>
    </food>
  </breakfast_menu>
</note>
```

Yields:

```json
{
    "note": {
        "to": "Tove",
        "from": "Jani",
        "heading": "Reminder",
        "body": "Don't forget me this weekend!",
        "breakfast_menu": {
            "$": { "aat1": "37", "aat2": "21" },
            "food": [
                {
                    "name": "Belgian Waffles",
                    "price": "$5.95",
                    "description": "Two of our famous Belgian Waffles with plenty of real maple syrup\\n   ",
                    "calories": "650"
                },
                {
                    "name": "Berry-Berry Belgian Waffles",
                    "price": "$8.95",
                    "description": "Belgian waffles covered with assorted fresh berries and whipped cream\\n    ",
                    "calories": "900"
                },
                {
                    "name": "French Toast",
                    "price": "$4.50",
                    "description": "Thick slices made from our homemade sourdough bread\\n    ",
                    "calories": "600"
                },
                {
                    "name": "Homestyle Breakfast",
                    "price": "$6.95",
                    "description": "Two eggs, bacon or sausage, toast, and our ever-popular hash browns\\n    ",
                    "calories": "950"
                }
            ]
        }
    }
}
```

## Download

If you want to use this library you can download [v1.2.0](https://www.npmjs.com/package/xmlparser2) here or check the release tab of this repository.
