/* 
* 反转链表
* var node = function(val) {
    this.value = val;
    this.next = null;
}
*/

function reverseLink(head) {
    let prev = null;
    let current = head;
    whilie(current) {
        const next = current.next;
        current.next = prev;
        pre = current;
        current = next;
    }
    // 最终current指向null
    return prev;
}
