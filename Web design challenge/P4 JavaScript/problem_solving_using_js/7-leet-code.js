/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let sLower = s.toLowerCase();
    let clear = ''
    for(let char in sLower){
        if(/\d/.test(char) || \[a-z]\.test(char)){
            clear += char;
        }
    }
};