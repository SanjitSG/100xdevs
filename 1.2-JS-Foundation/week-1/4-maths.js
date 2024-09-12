function mathMethod(val) {
  console.log("Original Value: ", val);

  let rounded = Math.round(val);
  console.log("After round(): ", rounded);

  let randomValue = (Math.random() * 10).toFixed();
  console.log("After random(): ", randomValue);

  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  let powerOfTwo = Math.pow(val, 2);
  console.log("After pow():", powerOfTwo);

  let squareRoot = Math.sqrt(val);
  console.log("After sqrt():", squareRoot);
}

mathMethod(4);
