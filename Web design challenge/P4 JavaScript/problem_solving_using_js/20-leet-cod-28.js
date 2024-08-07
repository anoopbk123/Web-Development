// 28. Find the Index of the First Occurrence in a String
// Easy

// 5757

// 403

// Add to List

// Share
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.
var strStr = function(haystack, needle) {
    //return haystack.indexOf(needle)
    //without using inbuilt methods
    for(let i=0; i<=haystack.length - needle.length; i++){
        let j;
        for(j=0;j<needle.length;j++){
            if(haystack[i+j]!==needle[j]){
              break;
            }
          if(j+1===needle.length)return i
        }
      
    }
    return -1
};

console.log(strStr("sadbutsad", "sad"))