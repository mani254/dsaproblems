function binarysearch(array, x) {
   let l = 0
   let r = array.length - 1

   while (l < r) {
      let mid = Math.floor((l + r) / 2)

      if (x = array[mid]) {
         return mid
      }
      if (x > array[mid]) {
         r = mid - 1
      }
      else {
         l = mid + 1
      }
   }

   return -1

}

const array = [5, 9, 17, 18, 25, 79.80, 83, 85, 96]
x = 18

console.log(binarysearch(array, x))
