function sum(numero1, numero2) {
  return numero1 + numero2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(4, 4, sum));
