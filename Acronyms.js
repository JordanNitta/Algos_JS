// Acronyms
//   Create a function that, given a string, returns the string’s acronym 
//   (first letter of each word capitalized). 
//   Do it with .split first if you need to, then try to do it without
// */

const two_str1 = "object oriented programming";
const two_expected1 = "OOP";

// The 4 pillars of OOP
const two_str2 = "abstraction polymorphism inheritance encapsulation";
const two_expected2 = "APIE";

const two_str3 = "software development life cycle";
const two_expected3 = "SDLC";

// Bonus: ignore extra spaces
const two_str4 = "  global   information tracker    ";
const two_expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    let results = "";
    let acronym = str.split(" ");
    for (let i = 0; i < acronym.length; i++) {
        if (acronym[i].length > 0) {
            results += acronym[i][0].toUpperCase();
        }
    }
    return results;
}
console.log(acronymize(two_str1));
console.log(acronymize(two_str2));
console.log(acronymize(two_str3));
console.log(acronymize(two_str4));
