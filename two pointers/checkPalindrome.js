function checkPalindrome(text){
    let start = 0;
    let end = text.length - 1;
    while (start <= end){
        if (text[start] != text[end]) return false
        start ++;
        end --;
    }
    return true;
}
console.log(checkPalindrome("ANJNA"))