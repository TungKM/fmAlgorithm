// https://www.youtube.com/watch?v=FS7UxmzYF_M 3.14

//How to transform the function below from linear O(n) to constant O(1) time complexity? Assuming the array is postive and sorted.

// let arr = [1,2,3,4,5]
// let sum = 0

// for(let num of arr){
//     sum += num
// }

//prep
// paramter: Array(nums, postive, no zero, no empty Element, sorted, start from 1, continuously )
// result: integer(positive, no empty)

//[1,2,3] => 6
//[1,2,3,4,5] => 15

function gaussMethod(arr){
    //extract the final number in the array
    const finalNum = arr[arr.length - 1]

    //apply gauss algorithm 
    const result = finalNum * (finalNum + 1) / 2
    
    //return
    return result 
}

console.log(gaussMethod([1,2,3]), "6")
console.log(gaussMethod([1,2,3,4,5]), "15")