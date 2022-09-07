function oddAndEvenSum(number) {

    let numToString = number.toString()
    function totalOddSum(numAsString) {
        let oddSum = 0
        for (let index = 0; index < numAsString.length; index++) {
            let curNum = Number(numAsString[index])
            if (curNum % 2 !== 0) {
                oddSum += curNum
            }
        }
        return oddSum
    }
    function totalEvenSum(numAsString) {
        let evenSum = 0
        for (let index = 0; index < numAsString.length; index++) {
            let curNum = Number(numAsString[index])
            if (curNum % 2 === 0) {
                evenSum += curNum
            }
        }
        return evenSum
    }
    
    console.log(`Odd sum = ${totalOddSum(numToString)}, Even sum = ${totalEvenSum(numToString)}`);

}

oddAndEvenSum(1000435)