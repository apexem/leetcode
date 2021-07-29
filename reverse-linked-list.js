class linkedList {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

const input = new linkedList(5, new linkedList(4, new linkedList(3, new linkedList(2, null))));
const reverse = (head) => {
    let prev = null;
    let curr = head;
    let next = null;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

reverse(input);