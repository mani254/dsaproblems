const array = [5, 4, 6, 3, 7, 1]
let n = array.length

for (let i = 1; i < n; i++) {
   let temp = array[i]

   let j = i - 1

   while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j = j - 1
   }
   array[j + 1] = temp
}


console.log(array)