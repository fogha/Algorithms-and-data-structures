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

// Converting the linked list to an array of values
function convertLinknodeToArray (listNode) {
    let resultArray = [];

    // if there is a next value, call this function to get its value recursively,
    // then concatenate the result from this recursive function to the result array
    if(listNode.next !== null) {
        resultArray = resultArray.concat(convertLinknodeToArray(listNode.next))
    }

    // add the node current value to the result array then return this array
    resultArray.push(listNode.val);
    return resultArray;
}

var addTwoNumbers = function(l1, l2) {
    let resultNode = null;
    
    // convert the linked list to an array and form a number using the values
    // Use bigInt because for very large Numbers, using Number returns 'e' 
    let l1Number = BigInt(convertLinknodeToArray(l1).join(''));
    let l2Number = BigInt(convertLinknodeToArray(l2).join(''));

    result = (l1Number + l2Number).toString().split('') ;

    for(let i = 0; i < result.length; i++ ) {
        resultNode = {
            val: result[i],
            next: resultNode
        }
    }
    return resultNode;
};