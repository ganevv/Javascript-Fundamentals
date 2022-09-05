function maxNumber(arr) {

    let topInteger = []

    for (let i = 0; i < arr.length; i++) {
        let currInteger = arr[i]
        let isTopInteger = true
        for (let j = i + 1; j < arr.length; j++) {
            let nextInteger = arr[j]
            if (currInteger <= nextInteger) {
                isTopInteger = false
                break;
            }
        }
        if (isTopInteger) {
            topInteger.push(currInteger)
        }
    }
    console.log(topInteger.join(" "));
}

maxNumber([14, 24, 3, 19, 15, 17])