// Write a program that reverses a string using recursion. Given the string "freeCodeCamp" your program should return "pmaCedoCeerf".


//Solution 1: Using Recursion
// function main(string){
//     const stringLength = string.length;
//     let reverse = "";
//     function reverseString(stringLength){
//         if (stringLength === 0){
//             return 
//         }
//         reverse = `${reverse}${string[stringLength-1]}`
//         return reverseString(stringLength-1)
//     }
//     reverseString(stringLength);
//     return reverse
// }
main("Sudip");

// Solution2: Using Iteration

function main(string){
    console.log(`Original ${string}`)
    let reverse = "";
    let stringLength = string.length;
    for (let i=stringLength-1; i>=0; i--){
        reverse = `${reverse}${string[i]}`;
    }
    console.log(`Reverse ${reverse}`)
    return reverse;
}
