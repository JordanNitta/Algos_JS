// Given five positive integers, find the minimum and maximum values that can be calculated 
// by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

let array = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
    let sum = 0;
    let min = arr[0]
    let max = arr[0]

    // Calculate the sum of all elements in the array
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
        sum += arr[i];
    }
    let maxValue = sum - min;
    let minValue = sum - max;
    return [minValue, maxValue]
}

console.log(miniMaxSum(array));
