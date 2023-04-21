// Given an array of integers, find the sum of its elements.
// For example, if the array , , so return .
// Function Description
// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
// simpleArraySum has the following parameter(s):
// ar: an array of integers
// Input Format
// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers representing the array's elements.
// Constraints
// Output Format
// Print the sum of the array's elements as a single integer.
const array = [6, 1, 2, 3, 4, 10, 11]
function simpleArraySum(ar) {
    // Write your code here
    let sum = 0
    for(let i =0; i < ar.length; i++){
        sum += ar[i]
    }
    return sum
}
console.log(simpleArraySum(array))

// Sample Output 31