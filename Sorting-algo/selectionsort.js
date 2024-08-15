const array = [8, 4, 64, 3, 4, 2, 1]


let i = 0
let j = 0
const n = array.length

while (i < n) {
   let minIndex = findMin(array, j)

   temp = array[minIndex]
   array[minIndex] = array[j]
   array[j] = temp

   j++
   i++
}

console.log(array)

function findMin(array, start) {
   let minIndex = start

   for (let k = start; k < array.length; k++) {
      if (array[k] < array[minIndex]) { minIndex = k }
   }
   return minIndex
}