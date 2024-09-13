function demo() {
  return new Promise(function (resolve) {
    resolve("im resolved");
  });
}

function printing(data) {
  console.log(data);
}

async function main() {
  const data = await demo();
  printing(data);
}

main();
