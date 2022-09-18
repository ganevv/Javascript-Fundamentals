function numbers(number) {

    let separated = number.split(" ").map(Number)
    let sum = 0
    let newArr = []

    for (i = 0; i < separated.length; i++) {
        sum += separated[i]
    }

    let average = Math.round(sum / separated.length)

    for (i = 0; i < separated.length; i++) {
        if (average < separated[i]) {
            newArr.push(separated[i])
        }
    }
    if (newArr.length <= 0) {
        console.log('No');
    }
    if (newArr.length > 5) {
        let command = newArr.sort((a, b) => b - a)
        let finalArr = command.splice(0, 5)
        console.log(finalArr.join(' '));
    } else if (newArr.length < 5 && newArr.length != 0) {
        let command = newArr.sort((a, b) => b - a)
        console.log(command.join(' '));
    }
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')