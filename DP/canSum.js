console.log(canSum(7, [2,3])) //true
console.log(canSum(7, [5,3,4,7])) //true
console.log(canSum(7, [2,4])) //false
console.log(canSum(8, [2,3, 5])) //true
console.log(canSum(300, [7,14])) //false

//Recursive method done, run into time limit exceeded error, we have to optimize it using dp.
// function canSum(targetSum, nums){
//   if (targetSum==0) return true;
//   if (targetSum < 0) return false;
//   for (let num of nums){
//     const remainderSum = targetSum - num;
//     if (canSum(remainderSum, nums)) return true;
//   }
//   return false;
// }

// Using DP
function canSum(targetSum, nums, memo={}){
  if (targetSum in memo) return memo[targetSum];
  if (targetSum==0) return true;
  if (targetSum < 0) return false;
  for (let num of nums){
    const remainderSum = targetSum - num;
    if (canSum(remainderSum, nums, memo)) return true;
  }
  memo[targetSum] = false;
  return memo[targetSum];
}