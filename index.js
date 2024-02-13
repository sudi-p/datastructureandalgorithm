/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const preMap = preToMap(prerequisites);
    console.log(preMap)
    let visited = new Set();
    var dfs = function(crs){
        if (visited.has(crs)) return false
        const preReqs = preMap.get(crs);
        if (!preReqs || preReqs == []) return true
        visited.add(crs)
        for (let i=0; i<preReqs.length; i++){
            if (!dfs(preReqs[i])) return false
        }
        preMap.set(crs, [])
        visited.delete(crs)
        return true;
    }
    for (let key of preMap.keys()){
        const answer = dfs(key)
        if (answer == false) return false;
    }
    return true
};
var preToMap = function(pre) {
    let preMap = new Map();
    pre.forEach(([course, prereq]) => {
        preMap.set(course, [...(preMap.get(course) || []), prereq])
    })
    return preMap;
}

const numCourses = 2
const prerequisites1 = [[1,0]]
const prerequisites2 = [[1,0],[0,1]]
console.log(canFinish(numCourses, prerequisites2))
