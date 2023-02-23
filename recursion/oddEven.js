function oddEven(num){
    if (num === 0) return "Evem";
    if (num === 1) return "Odd";
    return oddEven(num-2);
}

console.log(oddEven(11));