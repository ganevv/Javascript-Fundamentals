function palindromeIntegers(inputArr) {

    let arrOfNums = inputArr
    function isPalindrome(number) {
        let startNum = number
        let reversedNum = Number(number.toString().split("").reverse().join(''))
        if (startNum === reversedNum) {
            return true
        } else {
            return false
        }
    }
    for (let index = 0; index < arrOfNums.length; index++) {
        let curNum = arrOfNums[index]
        console.log(isPalindrome(curNum));
    }
}

palindromeIntegers([123, 323, 421, 121])