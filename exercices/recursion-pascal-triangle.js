const sum  = (arr) => {
  let arrSize = arr.length + 1 

  const result = (array, size, element = 0, index = 0) => {
    if(size == index) {
      return 0
    } else {
      return element + result(array, size, array[index], index += 1)
    }
  }


  return result(arr, arrSize)
  
}



console.log(sum([2,3,4,5,5,6,7,8,9]))











// pascalTriangle (size = 4) ==


'        1    '
'    1   2   1 '
'  1   3   3   1 '
'1   3   3   1 '

