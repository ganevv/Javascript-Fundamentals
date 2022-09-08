function lastKNumbersSequance(n, k) {

    let res = [1]

    for (let i = 0; i < n - 1; i++) {
        let lastK = res.slice(-k)
        let sum = 0
        for (let element of lastK) {
            sum += element
        }
        res.push(sum)
    }
    console.log(res.join(' '));
}

lastKNumbersSequance(6, 3)