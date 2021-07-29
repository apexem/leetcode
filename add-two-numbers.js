function ListNode(val) {
    this.val = val;
    this.next = null;
}

const input1 = new ListNode(2);
input1.next = new ListNode(4);
input1.next.next = new ListNode(3);
const input2 = new ListNode(5);
input2.next = new ListNode(6);
input2.next.next = new ListNode(4);

var addTwoNumbers = function (l1, l2) {
    let node1 = l1;
    let node2 = l2;
    let overFlow = 0;
    let resultNode = new ListNode(0);
    let placeholder = resultNode;
    while (1) {

        let sumResult = node1.val + node2.val + overFlow;
        if (sumResult > 9) {
            sumResult -= 10;
            overFlow = 1;
        } else {
            overFlow = 0;
        }
        placeholder.val = sumResult;
        if (node1.next == null && node2.next == null) {
            break;
        }
        placeholder.next = new ListNode(0);
        placeholder = placeholder.next;
        node1 = node1.next;
        node2 = node2.next;
    }
    return resultNode;
};

var result = addTwoNumbers(input1, input2);
console.log("xd");