function mergeSort(arr, lb, ub) {

   console.log("mergesort-", lb, ub,)
   if (lb < ub) {
      let mid = Math.floor((lb + ub) / 2);
      if (lb != mid) {
         mergeSort(arr, lb, mid);
      }
      if (mid + 1 != ub) {
         mergeSort(arr, mid + 1, ub);
      }
      merge(arr, lb, mid, ub);
   }
}

function merge(array, lb, mid, ub) {
   console.log("merge-", lb, ub)
   let left = array.slice(lb, mid + 1);
   let right = array.slice(mid + 1, ub + 1);

   let i = 0, j = 0, k = lb;

   while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
         array[k] = left[i];
         i++;
      } else {
         array[k] = right[j];
         j++;
      }
      k++;
   }

   while (i < left.length) {
      array[k] = left[i];
      i++;
      k++;
   }

   while (j < right.length) {
      array[k] = right[j];
      j++;
      k++;
   }
}


let array = [9, 5, 8, 4, 1, 2, 6, 2]
mergeSort(array, 0, array.length - 1)
console.log(array)


