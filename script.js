let i = "";
function FizzBuzz(i) {
  let outputDiv = document.getElementById("output");
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      outputDiv.innerHTML += "FizzBuzz<br>";
    } else {
      if (i % 5 == 0) {
        outputDiv.innerHTML += "Buzz<br>";
      } else {
        if (i % 3 == 0) {
          outputDiv.innerHTML += "Fizz<br>";
        } else {
          outputDiv.innerHTML += i + "<br>";
        }
      }
    }
  }
}
console.log(FizzBuzz(i));
