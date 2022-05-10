var fs = require("fs");

function fibonacci(num) {
    if (num == 0) {
        return num;
    }
    if (num == 1) {
        return num;
    }
    if (num >= 2) {
        return (fibonacci(num-2) + fibonacci(num-1));
    }
}

fs.readFile("dato.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let num = data;
  console.log("F(", num, "): ", fibonacci(num));
});
