function integerAndFloat(a, b, c) {

    let sum = a + b + c
    let sumAsString = String(sum)
    let type = 'Integer'


    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            type = 'Float'
            break;
        }
    }
    console.log(`${sum} - ${type}`);
}



integerAndFloat(9, 100, 1.1)