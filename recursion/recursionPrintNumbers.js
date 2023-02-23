function printNumber(n) {
    // This is the base condition
    if (n===5){
        console.log(n)
        return
    }
    //ENd of base condition
    console.log(n)
    return printNumber(n+1)
}

printNumber(1)