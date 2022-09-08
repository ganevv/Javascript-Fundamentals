function processOddNumbers(arr) {

    let filtered = arr.filter((x, i) => i % 2 !== 0)

    let doubled = filtered.map(x => x * 2)

    let res = doubled.reverse()

    console.log(res.join(' '));


    // same as top but shorter and better for using!!!
    // console.log(
    //     arr
    //         .filter((x, i) => i % 2 !== 0)
    //         .map(x => x * 2)
    //         .reverse()
    //         .join(' ')
    // );

}

processOddNumbers([10, 15, 20, 25])