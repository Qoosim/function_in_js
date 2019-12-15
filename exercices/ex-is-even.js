const isEven = num => {
return (num <= 0)  
  ? num == 0 ? true : false
  : isEven(num - 2) 
}

// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??