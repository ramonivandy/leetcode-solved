/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let arr = new Array(26).fill(0);

    s = s.split('');
    t = t.split('');

    // store the first string to array by char ascii code - a ascii code
    // why we need to minus with a ascii code?
    // it will represent the a gonna be at 0 index. 
    // 97 (a) - 97 (a) = 0
    // if the char is b, the ascii code is 98.
    // 98 - 97 = 1. b will be at index 1

    for(let i = 0; i < s.length; i++){
        let ascii = s[i].charCodeAt(0) - "a".charCodeAt(0);
        arr[ascii] += 1;
    }

    // check the other string
    for(let i = 0; i < t.length; i++){
        let ascii = t[i].charCodeAt(0) - "a".charCodeAt(0);
        arr[ascii] -= 1;
    }

    //check the array, is there any val more than 0.
    for(let i = 0; i < arr.length; i++){
        // the char from first string not removed, so its not anagram
        if(arr[i] > 0) return false;

        // the char is not found from the first string, make the value become negative.
        if(arr[i] < 0) return false;
    }

    return true
};