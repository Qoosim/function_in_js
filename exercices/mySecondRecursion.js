const fibonacci = (num) => {
  
  if (num == 18) return;
  let arr = [0, 1];
  
  fibonacci(arr.push(arr[-2] + arr[-1]));

}

fibonacci(18);