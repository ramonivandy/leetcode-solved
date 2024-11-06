/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let res = [];

    for(let i = 0; i < strs.length; i++){

        let array = new Array(26).fill(0);
        // loop for get the ascii code
        for(let j = 0; j < strs[i].length; j++){
            let ascii = strs[i][j].charCodeAt(0) - 97; //97 represent a ascii code.
            array[ascii] = 1;
        }

        let indexASCII = array.join('');

        if (map.has(indexASCII)) {
            map.get(indexASCII).push(strs[i]);
        } else {
            map.set(indexASCII, [strs[i]]);
        }

    }
    console.log(map)
    return [...map.values()]
};