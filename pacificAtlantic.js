var pacificAtlantic = function(heights) {
    let rows = heights.length;
    let cols = heights[0].length;
    let pacificSet = new Set();
    let atlanticSet = new Set();
    var dfs = function(r,c, visited, prevHeight){
        if (r<0 || c<0 || r>=rows || c>=cols || heights[r][c] < prevHeight || visited.has([r,c])) return
        visited.add([r,c])
        dfs(r+1, c, visited, heights[r][c])
        dfs(r-1, c, visited, heights[r][c])
        dfs(r, c+1, visited, heights[r][c])
        dfs(r, c-1, visited, heights[r][c])
    }
    for (let r=0; r<rows; r++){
        dfs(r, 0, pacificSet, heights[r][0])
        dfs(r, cols-1, atlanticSet, heigth[r][cols-1])
    }
    for (let c=0; c<cols; c++){
        dfs(0, c, pacificSet, heights[0][c])
        dfs(rows-1, c, atlanticSet, heights[rows-1, c])
    }
    console.log(pacificSet)
    console.log(atlanticSet)
    let answer = [];
    for (let r=0; r<rows; r++){
        for (let c=0; c<cols; c++){
            if (pacificSet.has([r,c]) && atlanticSet.has([r,c])) {
                answer.push([r,c])
            }
        }
    }
    return answer;
};
const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
console.log(pacificAtlantic(heights))