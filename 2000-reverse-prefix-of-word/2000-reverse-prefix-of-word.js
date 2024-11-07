/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let stack = [];
    let sliced = "";
    for(let i = 0; i < word.length; i++){
        if(word[i] != ch){
            stack.push(word[i]);
        }
        if(word[i] == ch){
            stack.push(word[i]);
            sliced += word.slice(i + 1);
            break;
        }
    }

    if(stack.length == word.length){
        // not found
        return word;
    }
    
    stack = stack.reverse();
    stack = stack.join('');

    return stack + sliced;
};