/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    let res = 0;
    for(let i = 0; i < tokens.length; i++){
        // get 2 last number
        let lastOne = stack[stack.length - 2];
        let lastTwo = stack[stack.length - 1];

        // console.log(`lastOne: ${lastOne} || lastTwo: ${lastTwo}`)

        switch(tokens[i]) {
            case "+":
                // add last two number
                stack.pop();
                stack.pop();
                stack.push(lastOne + lastTwo);
                console.log(`${lastOne} + ${lastTwo} = ${lastOne + lastTwo}`)
                break;
            case "-":
                // minus last two number
                stack.pop();
                stack.pop();
                stack.push(lastOne - lastTwo);
                console.log(`${lastOne} - ${lastTwo} = ${lastOne - lastTwo}`)
                break;
            case "*":
                // multiple last two number
                stack.pop();
                stack.pop();
                stack.push(lastOne * lastTwo);
                console.log(`${lastOne} * ${lastTwo} = ${lastOne * lastTwo}`)
                break;
            case "/":
                // divided last two number
                stack.pop();
                stack.pop();
                stack.push(Math.trunc(lastOne / lastTwo))
                console.log(`${lastOne} / ${lastTwo} = ${Math.floor(lastOne / lastTwo)}`)
                break;
            default:
                stack.push(Math.floor(tokens[i]));
        }
    }

    return stack[0]
};