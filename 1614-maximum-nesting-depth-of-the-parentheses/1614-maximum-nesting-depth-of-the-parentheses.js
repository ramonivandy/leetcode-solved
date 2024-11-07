/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];

    let highest = 0;
    let counter = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            counter++;
        }

        if(s[i] == ")"){
            counter--;
        }

        highest = Math.max(highest, counter);
    }

    return highest
};