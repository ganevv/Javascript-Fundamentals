function addAndSubtract(arr) {

    let myArr = arr
    let sumNewArr = 0
    let sumOriginalArr = 0

    for (i = 0; i < myArr.length; i++) {
        sumOriginalArr += myArr[i]

        if (myArr[i] % 2 === 0) {
            myArr[i] += i
        } else {
            myArr[i] -= i
        }
        sumNewArr += myArr[i]
    }
    console.log(myArr);
    console.log(sumOriginalArr);
    console.log(sumNewArr);
}

addAndSubtract([5, 15, 23, 56, 35])