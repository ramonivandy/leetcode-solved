/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++){
        // check the last stack with current

        if(stack[stack.length - 1] + s[i] == "AB" || stack[stack.length - 1] + s[i] == "CD") {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length;
};