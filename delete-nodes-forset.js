const input = new TreeNode(1,
    new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null)),
    new TreeNode(3, new TreeNode(6, null, null), new TreeNode(7, null, null)));

const toDel = [3, 5];

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var delNodes = function (root, to_delete) {
    const solution = new Array();
    const nodeCache = new Set();
    const toDel = new Set(to_delete);
    const queue = new Array();
    const traverse = (node, isRoot) => {
        if (node == null)
            return null;
        let isDeleted = toDel.has(node.val);
        if (isRoot) {
            solution.push(node);
        }
        node.left = traverse(node.left, isDeleted);
        node.right = traverse(node.right, isDeleted);
        return isDeleted ? null : node;
    }
    traverse(root, true);
    return solution;
}

const xd = delNodes(input, toDel);
console.log("finished");    