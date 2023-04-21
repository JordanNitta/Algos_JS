/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

const str2 = "hello";
const expected2 = "hello";

const str3 = "   This  is a   test  ";
const expected3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
    let words = wordsStr.split(" ")
    let reverseWord = words.reverse()
    let removeWhiteSpace = []
    for(let i = 0; i < reverseWord.length; i++){
        if(reverseWord[i]){
            removeWhiteSpace.push(reverseWord[i])
        }
    } 
    let reverse = removeWhiteSpace.join(" ")
    return reverse
}
console.log(reverseWordOrder(str1))
// if(reverseWord[i]){
// }
console.log(reverseWordOrder(str2))
console.log(reverseWordOrder(str3))
/*****************************************************************************/

/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

// const two_str1 = "abcABC";
// const two_expected1 = "abcABC";

// const two_str2 = "helloo";
// const two_expected2 = "helo";

// const two_str5 = "hellool";
// const two_expected5 = "heol";

// const two_str3 = "";
// const two_expected3 = "";

// const two_str4 = "aa";
// const two_expected4 = "a";

// /**
//  * De-dupes the given string.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str A string that may contain duplicates.
//  * @returns {string} The given string with any duplicate characters removed.
//  */
// function stringDedupe(str) {

// }   
// console.log(stringDedupe(two_str1))
// console.log(stringDedupe(two_str2))
// console.log(stringDedupe(two_str3))
// console.log(stringDedupe(two_str4))