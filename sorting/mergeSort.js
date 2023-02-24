// recursive function
function selectionSort(arr){
    if (arr.length == 1) return arr
    const mid = Math.floor(arr.length/2)
    const left = selectionSort(arr.slice(0,mid))
    const right = selectionSort(arr.slice(mid, arr.length))
    return mergeLists(left, right)
} 

// function to mere two ordered lists

// console.log(mergeLists([1,3,5],[2,4,6]))
console.log(selectionSort([1,2,8,50,9,3,5,7,6])) // 1,2,3,4,5,6,7,8,9

function mergeLists(list1, list2){
    let i = 0;
    let j = 0;
    let k = 0;
    let newList = []
    while(i<list1.length && j<list2.length){
        if (list1[i]<list2[j]){
            newList[k] = list1[i]
            i++
        } else {
            newList[k] = list2[j]
            j++
        }
        k++
    }
    if (i < list1.length){
        newList = [...newList, ...list1.slice(i, list1.length)]
    }
    if (j < list2.length){
        newList = [...newList, ...list2.slice(j, list2.length)]
    }
    return newList
}

