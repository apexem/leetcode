const input = new TreeNode(1,
    new TreeNode(2, new TreeNode(5, null, null), new TreeNode(6, null, null)),
    new TreeNode(5, new TreeNode(7, null, null), new TreeNode(8, null, null)));


function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var zigzagLevelOrder = function (root) {
    let flag = true;
    let itr = 0;
    const solution = new Array();
    let visited = new Set();
    const iterate = (node, solution, itr, flag) => {
        if (node == null)
            return;
        if (!visited.has(itr)) {
            visited.add(itr);
            solution.push([]);
        }
        solution[itr].push(node.val);
        if (flag) {
            flag = false;
            iterate(node.right, solution, itr + 1, flag);
            iterate(node.left, solution, itr + 1, flag);
        } else {
            flag = true;
            iterate(node.left, solution, itr + 1, flag);
            iterate(node.right, solution, itr + 1, flag);
        }
    }
    iterate(root, solution, itr, flag);
    return solution;
};

console.log(zigzagLevelOrder(input));