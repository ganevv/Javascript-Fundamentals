function negativeOrPositiveNumbers(arr) {

    let result = []

    for (let element of arr) {
        element = Number(element)
        if (element >= 0) {
            result.push(element)
        } else {
            result.unshift(element)
        }
    }
    for (element of result) {
        console.log(element);
    }
}


negativeOrPositiveNumbers(['7', '-2', '8', '9'])