var findDisappearedNumbers = function(nums){
    numbers = []
    for (let i=1; i<=nums.length; i++){
        let inList = false
        for (let j=0; j<nums.length; j++){
            if (i==nums[j]){
                inList = true
                break
            }
        }
        if (!inList) numbers.push[i]
    }
    return numbers
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))