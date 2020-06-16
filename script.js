const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const initial = document.getElementById("original");
const final = document.getElementById("convert");
const displayValue = document.getElementById("displayValue");
const swap = document.getElementById("swap");

console.log(input1.value, input2.value, initial.value, final.value);

function calculateRate() {
  let finalValue = convert.value;
  console.log(original.value);
  fetch(`https://api.exchangerate-api.com/v4/latest/${original.value}`)
    .then((res) => res.json())
    .then((data) => {
      displayValue.innerText = `1 ${original.value} = ${data.rates[finalValue]} ${finalValue}`;
      input2.value = input1.value * data.rates[finalValue];
    });
}

/*
  Event Listner
*/
input1.addEventListener("change", () => {
  calculateRate();
  console.log(input1.value);
});
input2.addEventListener("change", () => {
  calculateRate();
  console.log(input2.value);
});
initial.addEventListener("input", () => {
  calculateRate();
  console.log(initial.value);
});
final.addEventListener("input", () => {
  calculateRate();
  console.log(final.value);
});

swap.addEventListener("click", () => {
  const temp = original.value;
  original.value = convert.value;
  convert.value = temp;
  calculateRate();
});
