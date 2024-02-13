var combinationSum = function(candidates, target) {
    res = []
    function dfs(i, curr, total){
        if (total==target){
            res.push([...curr])
            return
        }
        if (i>=candidates.length || total>target){
            return
        }
        curr.push(candidates[i])
        dfs(i,curr,total+candidates[i])
        curr.pop()
        dfs(i+1,curr, total)
    }
    dfs(0, [], 0)
    return res
};

console.log(combinationSum([2,3,6,7], 7))