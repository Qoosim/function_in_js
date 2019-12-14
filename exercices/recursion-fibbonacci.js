const fibbonacci = num => {
  let fibbo_seq = [1, 2]

  const fibbo_sequence = (arr_fibbo_seq = fibbo_seq, index = 2) => {
    if (index == num) {
      return arr_fibbo_seq
    } else {
      arr_fibbo_seq[index] = fibbo_seq[index - 2] + fibbo_seq[index - 1]
      return fibbo_sequence(arr_fibbo_seq, index + 1)
    }
  }

  return fibbo_sequence().filter(x => x <= num)

}


console.log(fibbonacci(20))


// fibbonacci(20) --> [1, 2, 3, 5, 8, 13]