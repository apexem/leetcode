const input = new TreeNode(1,
    new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null)),
    new TreeNode(2, new TreeNode(4, null, null), new TreeNode(3, null, null)));


function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var levelOrder = function (root) {
    let solution = new Array();
    let temp = new Set();
    let iterator = 0;

    const hehe = (node, solution, itr) => {
        if (node == null) {
            return;
        }
        if (!temp.has(itr)) {
            temp.add(itr);
            solution.push([]);
        }

        solution[itr].push(node.val);
        hehe(node.left, solution, itr + 1);
        hehe(node.right, solution, itr + 1);
    }
    hehe(root, solution, iterator);
    return solution;
};

console.log(levelOrder(input));