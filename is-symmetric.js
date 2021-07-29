/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }

 /**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const input = new TreeNode(1,
    new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null)),
    new TreeNode(2, new TreeNode(4, null, null), new TreeNode(3, null, null)));


var isMirror = (node1, node2) => {
    if (node1 == undefined && node2 == undefined)
        return 0;
    else if (node1.val == node2.val) {
        isMirror(node1.left, node2.right);
        isMirror(node1.right, node2.left);
        return 0;
    } else
        throw finishedException;
}

var isSymmetric = function (root) {
    try {
        isMirror(root.left, root.right);
    } catch (error) {
        console.log(error);
        return false;
    }
    return true;
};

console.log(isSymmetric(input));