function arrayModifier(input) {

    arr = input.shift().split(' ').map(Number)

    while (input[0] != 'end') {
        let tokens = input.shift().split(' ')
        let command = tokens[0]
        let index1 = Number(tokens[1])
        let index2 = Number(tokens[2])
        switch (command) {
            case 'swap':
                let temp = arr[index1]
                arr[index1] = arr[index2]
                arr[index2] = temp
                break;
            case 'multiply':
                arr[index1] *= arr[index2]
                break;
            case 'decrease':
                for (let i = 0; i < arr.length; i++) {
                    arr[i]--
                }
                break;
        }
    }
    console.log(arr.join(', '));
}


arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end'])