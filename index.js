let numsPower = [];

function power(x,y){
  let power = 1;
  for (let i = 1; i <= y; i++) {
    power*=x
  }
  return power;
}

let num1 = +prompt("Enter The Number");
let num2 = +prompt("Enter The Power");

power(num1, num2);

console.log(`The Power Of ${num1} To The Power Of ${num2} Is ${power(num1,num2)}`)

numsPower.push(num1, num2);

console.log(numsPower);