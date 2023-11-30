// 242. Valid Anagram
// Easy

// 11012

// 345

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//complexity of O(n)

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  // maping each char in s with value as its count in s
  const charCount = {};
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  //comparing s with t
  for (let char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  for (let char in charCount) {
    if (charCount[char] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

//complexity of O(n^2)
// var isAnagram = function(s, t) {
//     if(s.length !== t.length){
//         return false;
//     }

//     else{
//         let result = true;
//         let countS = 0;
//         let countT = 0;
//         for(i = 0; i < s.length; i++){
//             for(j = 0; j < s.length; j++){
//                 if(s[i] === s[j]){
//                     countS += 1;
//                 }
//                 if(s[i] === t[j]){
//                     countT += 1;
//                 }
//             }
//             if(countS === countT){
//                 countS = 0;
//                 countT = 0;
//             }
//             else{
//                 result = false;
//                 break;
//             }
//         }
//         return result;
//     }
// };
