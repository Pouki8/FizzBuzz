let i = "";
function FizzBuzz(i) {
  let outputDiv = document.getElementById("output");
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
      outputDiv.innerHTML += "FizzBuzz<br>";
    } else {
      if (i % 5 == 0) {
        console.log("Buzz");
        outputDiv.innerHTML += "Buzz<br>";
      } else {
        if (i % 3 == 0) {
          console.log("Fizz");
          outputDiv.innerHTML += "Fizz<br>";
        } else {
          console.log(i);
          outputDiv.innerHTML += i + "<br>";
        }
      }
    }
  }
}
console.log(FizzBuzz(i));
