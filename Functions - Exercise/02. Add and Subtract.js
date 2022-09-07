function addAndSubtract(a, b, c) {

    function add(firstNum, secondNum) {
        return firstNum + secondNum
    }
    let subtract = (addRes, thirdNum) => addRes - thirdNum
    let res = add(a, b)
    let finalRes = subtract(res, c)
    console.log(finalRes);
}

addAndSubtract(23, 6, 10)