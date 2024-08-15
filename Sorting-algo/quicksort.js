function partition(lb, A, ub) {
   let pivot = A[lb];
   let start = lb;
   let end = ub;

   while (start < end) {
      // Move start to the right until we find an element greater than the pivot
      while (start < end && A[start] <= pivot) {
         start++;
      }
      // Move end to the left until we find an element less than the pivot
      while (start < end && A[end] >= pivot) {
         end--;
      }
      // Swap elements if needed
      if (start < end) {
         let temp = A[start];
         A[start] = A[end];
         A[end] = temp;
      }
   }

   // Place the pivot element in its correct position
   A[lb] = A[end];
   A[end] = pivot;

   return end;
}

function quickSort(array, lb = 0, ub = array.length - 1) {
   if (lb < ub) {
      let pivotIndex = partition(lb, array, ub);
      quickSort(array, lb, pivotIndex - 1); // Recursively sort the left sub-array
      quickSort(array, pivotIndex + 1, ub); // Recursively sort the right sub-array
   }
}


const array = [15, 16, 6, 8, 5];
quickSort(array);
console.log(array); 
