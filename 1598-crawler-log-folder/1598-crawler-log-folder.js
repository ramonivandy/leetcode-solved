/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let count = 0;

    for(let i = 0; i < logs.length; i++){
        if(logs[i] == "../"){
            count--;
        } else if(logs[i] == "./") {
            continue;
        } else {
            count++
        }
    }

    return count < 0 ? 0 : count;
};