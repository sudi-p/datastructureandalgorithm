function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
const node5 = new TreeNode(5)
const node2 = new TreeNode(2, null, node5)
const node3 = new TreeNode(3)
const root = new TreeNode(1, node2, node3)

var binaryTreePaths = function(root) {
    if (!root) return []
    let answer = [];
    function dfs(node, path){
        path.push(node.val)                             
        if (!node.left && !node.right){
            answer.push(path.join("->"))
        }
        if (node.left) dfs(node.left, path)
        if (node.right) dfs(node.right, path)
        path.pop()
    }
    dfs(root, [])
    return answer
};

console.log(binaryTreePaths(root))