var myPow = function(x, n) {
    if (n == 0) return 1
    if (n > 0) return (x*myPow(x,n-1))
    if (n < 0) return (1/x*myPow(x,n+1))
};
myPow(2,10);
