function magicSum(arr, num) {

    for (let i = 0; i < arr.length - 1; i++) {
        let currEl = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j]
            let sum = currEl + nextEl
            if (sum === num) {
                console.log(`${currEl} ${nextEl}`);
            }
        }
    }
}


magicSum([1, 7, 6, 2, 19, 23], 8)