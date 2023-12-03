// 14. Longest Common Prefix
// Easy

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let minStr = strs[0];
    let i = 0;
    for(let str = 0; str < strs.length; str ++){
        if(minStr.length > str.length){
            minStr = strs[str];
        }
    }
    while(i < minStr.length){
        for(let str = 0; str < strs.length; str ++){
            if(strs[str][i] !== minStr[i]){
                return prefix;
            }
        
        }
        prefix += minStr[i];
        i ++;
        
    }
    return prefix;
};