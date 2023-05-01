/* 
Given by Riot games.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

const str2 = "b70a164c32a20c10a20";
const expected2 = "a204b70c42";


/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) { 
    let obj = {};
    for(let i = 0; i < s.length; i++){
        const char = s[i]
        if(obj[char]){
            obj[char] ++
        } else {
            obj[char] = 1
        }
        console.table(obj)
        console.log('------------------')
    }
    let result = " ";
    for(const char in obj){
        result += obj[char]
    }
    return result
}
console.log(rehash(str1))