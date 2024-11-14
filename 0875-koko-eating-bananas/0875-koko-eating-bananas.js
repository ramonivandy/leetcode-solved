/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    //cover single piles
    if(piles.length < 2){
        return Math.ceil(piles[0] / h);
    }

    let left = 1;
    let right = 0;
    
    // search the largest piles first
    for(let i = 0; i < piles.length; i++){
        right = Math.max(right, piles[i]);
    }

    while (left <= right){
        let mid = Math.floor((left + right) / 2);

        let k = 0;
        for(let i = 0; i < piles.length; i++){
            let hour = Math.ceil(piles[i] / mid);
            k = k + hour;
        }

        console.log(`k = ${k} || h = ${h} || mid = ${mid}`);

        if(k <= h){
            right = mid - 1;
        } else if (k > h){
            left = mid + 1;
        }
    }

    return left
};