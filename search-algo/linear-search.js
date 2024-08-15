

function linearsearch(array, x) {
   for (let i in array) {
      if (array[i] == x) {
         return 'element found'
      }
   }
   return 'element not found'
}

const array = [1, 25, 374, 47, 39.84, 25, 4, 50]
const x = 25
console.log(linearsearch(array, x))
