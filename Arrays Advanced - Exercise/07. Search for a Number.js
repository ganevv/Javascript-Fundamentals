function searchForANumber(arr, input) {

    let numbersToTake = input[0]
    let deleteNumbers = input[1]
    let searchedNumber = input[2]

    let newArr = arr.splice(0, numbersToTake)
    newArr = newArr.splice(deleteNumbers)
    let counter = 0
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === searchedNumber) {
            counter++
        }
    }
    console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])