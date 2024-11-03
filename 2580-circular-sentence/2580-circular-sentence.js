/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let split = sentence.split(" ");
    let stack = [];

    for(let i = 0; i < split.length; i++){
        let start = split[i][0] // start
        let end = split[i][split[i].length - 1] // end

        if(stack.length < 1){
            if(start !== end && split.length < 2){
                return false;
            }

            // push first word
            stack.push(start);
            stack.push(end);

            continue;
        }

        //check normal
        if(stack[stack.length - 1] !== start){
            return false;
        }
        stack.pop();
        stack.push(end)

        if(i === split.length - 1){
            stack.pop()
            
            // last word, check the stack with end
            if(stack[stack.length - 1] !== end){
                return false;
            }
        }
    }

    return true
};