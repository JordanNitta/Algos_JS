/* 
Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

const nums4 = [5,5,5,5,5]

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    return sum
}

function sumArrRec(nums = [], i = 0 ){
    // base case 
    // if(!nums[i]){
    //     return 0
    // }
    // 
    if(i === nums.length){
        return 0;
    }
    return nums[i] + sumArrRec(nums, i + 1)
}

console.log(sumArrRec(nums4))

console.log(sumArr(nums1))
console.log(sumArr(nums2))
console.log(sumArr(nums3))
console.log(sumArr(nums4))

/*****************************************************************************/