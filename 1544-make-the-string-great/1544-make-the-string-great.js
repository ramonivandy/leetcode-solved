/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(stack.length < 1){
            stack.push(s[i]);
            continue;
        }

        let stackChar = stack[stack.length - 1].charCodeAt(0);
        let char = s[i].charCodeAt(0);

        console.log(`${stackChar} || ${char}`)

        // if stack is non capital (convert to capital), the char is capital
        if(stackChar - 32 == char){
            //remove the char stack
            stack.pop();
        } else if (stackChar == char - 32){ // the stack is capital, the current char not capital
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join('')
};