// 3, 4, 6, 2, 1, 7
function swap(arr, x, y){
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function selectionSort(arr){
    let min_index;
    for (let i=0; i< arr.length-1; i++){
        min_index = i;
        for (let j=i+1; j<arr.length; j++){
            if ( arr[j]< arr[min_index]){
                min_index = j;
            }
        }
        swap(arr, i, min_index)
    }
    return arr
}

function printArray(array) {
    array.map(num => {
        process.stdout.write(`${num} `)
    })
}
 
let unsortedArray = [3, 4, 6, 2, 1, 7]
printArray(selectionSort(unsortedArray))
