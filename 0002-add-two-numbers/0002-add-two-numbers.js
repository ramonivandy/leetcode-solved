/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (l1 == null && l2 == null) {
        return [0]
    }

    let res = new ListNode();
    let returnRes = res;

    let carrier = 0;
    while (l1 || l2) {
        let sum = 0;
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;

        sum = l1Val + l2Val;

        if(carrier > 0){
            sum += carrier;
            carrier = 0;
        }

        if (sum > 9) {
            carrier = 1;
            res.val = sum % 10;
        } else {
            res.val = sum;
        }

        if(l1 && l1.next || l2 && l2.next){
            res.next = new ListNode()
            res = res.next
        }

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;

        if(!l1 && !l2 && carrier > 0){
            res.next = new ListNode()
            res.next.val = carrier
        }
    }

    return returnRes;
};