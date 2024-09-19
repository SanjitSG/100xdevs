async function populateDiv() {
  const ele = document.getElementById("result");
  const inputs = document.querySelectorAll('input[type="text"]');

  const num1 = parseInt(inputs[0].value);
  const num2 = parseInt(inputs[1].value);

  const response = await fetch(`http://localhost:5000/sum?num1=${num1}&num2=${num2}`);
  const result = await response.json();
  console.log(result);
  ele.textContent = result.sum;
}
