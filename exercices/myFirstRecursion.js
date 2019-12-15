const recurs = (number) => {
  if(number == 13) return;
  console.log(number);
  recurs(number + 1)
}

recurs(1);