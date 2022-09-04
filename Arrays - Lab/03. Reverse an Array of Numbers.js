function reverseAnArrayOfNumbers(num, arr) {
    let slice = [];
    for (let i = 0; i < num; i++) {
        slice.push(arr[i]);
    }
    let res = ' '
    for (let i = slice.length - 1; i >= 0; i--) {
        res += slice[i]
        res += ' '
    }
    console.log(res);
}



reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])