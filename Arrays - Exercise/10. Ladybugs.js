function ladybugs(input) {

    let n = input.shift()
    let field = (new Array(n)).fill(0)
    let index = input
        .shift()
        .split(' ')

    for (let i of index) {
        i = Number(i)
        if (i >= 0 && i < n) {
            field[i] = 1
        }
    }

    for (let command of input) {
        let tokens = command.split(' ')
        let startingIndex = Number(tokens[0])
        if (field[startingIndex] == 1) {
            let currentI = startingIndex
            let direction = Number(tokens[1])
            let offset = Number(tokens[2])
            if (direction == 'left') {
                offset *= -1
            }
            while (currentI >= 0 && currentI < n && field[currentI] == 1) {
                currentI += offset
            }
            field[startingIndex] = 0
            if (currentI >= 0 && currentI < n) {
                field[currentI] = 1
            }
        }
    }
    console.log(field.join(` `));
}


ladybugs([3, '0 1', '0 right 1', '2 right 1'])