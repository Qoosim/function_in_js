const countBs = string => {
  let counter = string.split('').filter(char => char.toLowerCase() == 'b').length
  return counter
}

const countChar = (string, char) => {
  let counter = string.split('').filter(charac => charac.toLowerCase() == char).length
  return counter
}

// Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4