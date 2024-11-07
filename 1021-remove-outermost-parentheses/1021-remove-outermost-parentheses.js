/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let open = 0;
    let res = "";
    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            if(open > 0){
                res += s[i];
            }

            open++;
        } else {
            open--
            if(open > 0){
                res += s[i]
            }
        }
    }

    return res;
};