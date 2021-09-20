const findMinAndRemoveSorted = (arr) => arr.shift()

const merge = (firstArr, secArr) => {
    let sorted = []
    while(firstArr.length != 0 && secArr.length != 0){
        if(firstArr[0] < secArr[0]){
            sorted.push(findMinAndRemoveSorted(firstArr))
        }
        else {
            sorted.push(findMinAndRemoveSorted(secArr))
        }
    }
    return sorted.concat(firstArr).concat(secArr)
}

const mergeSort = (array) => {
    const length = array.length
    const middle = length / 2
    const firstHalf = array.slice(0, middle)
    const secHalf = array.slice(middle, length)
    let sorted;
    // console.log('Method 1',)
    // console.log(firstHalf,secHalf)
    // console.log('Method 2')
    console.log(array.length < 2)
    if(array.length < 2){
        return array
    } 
    else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secHalf))
    }

    return sorted
}



console.log(mergeSort([2,4,3, 5, 6, 3]), 'result')

// function findMinAndRemoveSorted(array){
//     return array.shift()
//   }
  
//   function merge(firstSubarray, secondSubArray){
//     let sorted = []
//     while(firstSubarray.length != 0 && secondSubArray.length != 0){
//       if(firstSubarray[0] < secondSubArray[0]){
//         sorted.push(findMinAndRemoveSorted(firstSubarray))
//       } else {
//         sorted.push(findMinAndRemoveSorted(secondSubArray))
//       }
//     }
//     return sorted.concat(firstSubarray).concat(secondSubArray)
//   }
  
//   function mergeSort(array){
//     let midpoint = array.length/2
//     let firstHalf = array.slice(0, midpoint)
//     let secondHalf = array.slice(midpoint, array.length)
//     let sorted;
  
//     if(array.length < 2){
//       return array
//     } else {
//       sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
//     }
//     return sorted
//   }