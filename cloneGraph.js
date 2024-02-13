function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};
var cloneGraph = function(node) {
    if (!node) return null
    var oldToNew = new Map()
    var dfs = function(n){
	console.log(oldToNew[n])
        if (oldToNew.has(n)){
            console.log(`${n.val} already cloned`)
            return oldToNew.get(n)
        }
        const copy = new Node(n.val)
        oldToNew.set(n,copy);
        const neighbors = n.neighbors;
        for (let i=0; i<neighbors.length; i++){
            copy.neighbors.push(dfs(neighbors[i]))
        }
        return copy
    }
	const ans = dfs(node)
	console.log(ans)
    return ans
};

const nodeA = new Node(1)
const nodeB = new Node(2)
const nodeC = new Node(3)
const nodeD = new Node(4)

nodeA.neighbors = [nodeB, nodeD]
nodeB.neighbors = [nodeA, nodeC]
nodeC.neighbors = [nodeB, nodeD]
nodeD.neighbors = [nodeA, nodeC]

cloneGraph(nodeA)