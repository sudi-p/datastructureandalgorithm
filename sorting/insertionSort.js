function swap(arr, x, y){
    const temp = arr[y]
    arr[y] = arr[x]
    arr[x] = temp
    return arr
}

function insertionSort(arr){
    for (let i=1; i< arr.length; i++){
        let j = i;
        while (j>0 && arr[j]<arr[j-1]){
            swap(arr, j, j-1);
            j--;
        }
    }
    return arr;
}
function printArray(array) {
    array.map(num => {
        process.stdout.write(`${num} `)
    })
}
 
let unsortedArray = [3, 4, 6, 2, 1, 7]
console.log("Unsorted array is", unsortedArray)
console.log("sorted Array is ", insertionSort(unsortedArray))
