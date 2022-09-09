function arrayManipulator(numbers, commands) {

    for (let command of commands) {
        let tokens = command.split(" ")
        let curCommand = tokens[0]
        if (curCommand === 'add') {
            let index = Number(tokens[1])
            let element = Number(tokens[2])
            numbers.splice(index, 0, element)
        } else if (curCommand === 'addMany') {
            let index = Number(tokens[1])
            tokens.splice(0, 2)
            let numbersToAdd = tokens.map(Number)
            numbers.splice(index, 0, ...numbersToAdd)
        } else if (curCommand === 'contains') {
            let result = numbers.indexOf(Number(tokens[1]))
            console.log(result);
        } else if (curCommand === 'remove') {
            let index = Number(tokens[1])
            numbers.splice(index, 1)
        } else if (curCommand === 'shift') {
            let index = Number(tokens[1])
            for (let i = 0; i < index; i++) {
                let firstN = numbers.shift()
                numbers.push(firstN)
            }
        } else if (curCommand === 'sumPairs') {
            let resArr = []
            if (numbers.length % 2 !== 0) {
                numbers.push(0)
            }
            for (let i = 0; i < numbers.length - 1; i+=2) {
                let sum = numbers[i] + numbers[i + 1]
                resArr.push(sum)
            }
            numbers = resArr
        } else if (curCommand === 'print') {
            console.log(`[ ${numbers.join(", ")} ]`);
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])