const array = [15, 16, 6, 8, 5]


const n = array.length

for (let i = 0; i < n - 1; i++) {
   let swapped = false
   for (let j = 0; j <= n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
         let temp = array[j];
         array[j] = array[j + 1]
         array[j + 1] = temp
         swapped = true
      }
   }
   if (!swapped) {
      break
   }
}

console.log(array)