const sampleObject = {
  name: "Bob",
  age: 26,
  gender: "male",
};

function objMethods(obj) {
  let keys = Object.keys(obj);
  console.log("Keys: ", keys);

  let values = Object.values(obj);
  console.log("Values: ", values);

  let entries = Object.entries(obj);
  console.log("Object entries: ", entries);

  let hasProp = obj.hasOwnProperty("name");
  console.log("After hasOwnProperty(): ", hasProp);
}

objMethods(sampleObject);

const target = { a: 1, b: 4 };
const source = { b: 2, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);
console.log(returnedTarget === target);
