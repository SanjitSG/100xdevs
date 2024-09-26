const string = '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

console.log("Original String: ", string);

const parsedObject = JSON.parse(string);
console.log("After Parsing: ", parsedObject);

console.log("After Stringifying: ", JSON.stringify(parsedObject));
