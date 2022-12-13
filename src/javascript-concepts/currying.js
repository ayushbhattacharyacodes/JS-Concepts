//---USING BIND METHOD
let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2)
//mechanism
// let multiply = function(2,y){
//     console.log(2*y);
// }
multiplyByTwo(3)

// let multiplyByFive = multiply.bind(this,5)
// multiplyByFive(7)


//USING CLOSURE
let multiplication = function(x){
  return function(y){
    return x*y;
  }
}

let multiplyBy3 = multiplication(3)
console.log(multiplyBy3(6))