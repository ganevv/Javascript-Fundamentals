function amazingNumbers(num) {

    let res = 0
    let numAsString = String(num)

    for (let i = 0; i < numAsString.length; i++) {
        res += Number(numAsString[i])
    }

    let resAsString = String(res)
    let special = false

    for (let i = 0; i < resAsString.length; i++) {
        if (resAsString[i] == '9') {
            special = true
        }
    }
    console.log(`${num} Amazing? ${special ? 'True' : 'False'}`);
}



amazingNumbers(1233)
amazingNumbers(999)