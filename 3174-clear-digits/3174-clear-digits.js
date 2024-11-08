/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(!isNaN(Number(s[i]))){
            // its number, pop the stack
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join('');
};