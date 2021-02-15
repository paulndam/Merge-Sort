function merge(arrayOne, arrayTwo) {
  // create an empty array and take a look at each of the smallest values in each arrays
  let emptyArrResult = [];
  let i = 0;
  let j = 0;

  // while there are still values or elements that we haven't yet looked at
  while (i < arrayOne.length && j < arrayTwo.length) {
    // if the value in the first array is smaller than the value in the second array,
    //push that value of the first array that is smaller into the empty array you created,
    // and move to next value in the first array
    if (arrayOne[i] < arrayTwo[j]) {
      emptyArrResult.push(arrayOne[i]);
      i++;
    } else {
      // if the value in the first array is larger than the value in the second array,
      // push that value of the second array into the empty arraya you created and move to the
      // value in the second array
      emptyArrResult.push(arrayTwo[j]);
      j++;
    }
  }
  // once we are done with one array, push all the remaining values from the other arrays
  while (i < arrayOne.length) {
    emptyArrResult.push(arrayOne[i]);
    i++;
  }
  while (j < arrayTwo.length) {
    emptyArrResult.push(arrayTwo[j]);
    j++;
  }
  // return the result array
  return emptyArrResult;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// Merge sort pseudocode

function mergeSort(array) {
  // break the arrays into halves till you have only a single array
  if (array.length <= 1) {
    return array;
  }
  // slicing the array to get the midpoint
  let middle = Math.floor(array.length / 2);
  // once you have smaller sorted arrays, merge those arrays with the sorted arrays untill you have a full length array
  //console.log(middle)
  // slicing the left side
  let leftSide = mergeSort(array.slice(0, middle));
  // slicing the right side
  let rightSide = mergeSort(array.slice(middle));

  // once the array have been merged back together return the merged and sorted array.

  return merge(leftSide, rightSide);
}
console.log(mergeSort([10,24,76,73,45,80]))