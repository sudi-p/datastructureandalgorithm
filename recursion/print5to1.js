function print5to1(num){
    if (num==1){
        process.stdout.write(`1 `) ;
        return;
    }
    print5to1(num-1)
    process.stdout.write(`${num} `)
    return
}
print5to1(5)