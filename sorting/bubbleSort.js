const bubbleSort = (arr) => {
    for (let i=0; i<arr.length; i++){
        let swapped = false;
        for (let j=1; j<arr.length-i; j++){
            if (arr[j] < arr[j-1]){
                swapped = true
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
        if (!swapped) return arr
    }
    return arr
}
console.log(bubbleSort([-3, 4, 6, 2, 1, 7]))