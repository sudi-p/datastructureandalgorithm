// Write a program that returns the number of times a character appears in string. Your program should receive a string and the character. It should then return number of times the character appears in the string.

function main(text, character){
    let number = 0;
    let stringLength = text.length;
    function numberOfCharacterInAString(length){
        if (length == -1) return 0
        if (text[length] == character){
            number += 1;
        }
        return numberOfCharacterInAString(length - 1)

    }
    numberOfCharacterInAString(stringLength);
    return number;
}

console.log(main("sudipp", "p"))