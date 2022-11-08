function fibNumber(n){
  if (n<2) return n
  return fibNumber(n-1) + fibNumber(n-2)  
}

console.log(fibNumber(50))
