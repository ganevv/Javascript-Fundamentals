function solve(input) {

    let word = input.shift()

    while (input[0] !== 'Complete') {
        let tokens = input.shift().split(' ')
        let command = tokens[0]
        let p1 = tokens[1]
        let p2 = tokens[2]
        if (command == 'Make') {
            if (p1 == 'Upper') {
                let currIndex = word.substring(+p2, (+p2 + 1))
                upperCase = currIndex.toUpperCase()
                word = word.replace(currIndex, upperCase)
                console.log(word);
            } else if (p1 == 'Lower') {
                let currIndex = word.substring(+p2, (+p2 + 1))
                upperCase = currIndex.toLowerCase()
                word = word.replace(currIndex, upperCase)
                console.log(word);
            }
        } else if (command == 'Insert') {
            if (+p1 >= 0) {
                word = word.splice(+p1, 0, p2)
                console.log(word);
            }
        } else if (command == 'Replace') {
            let ASCIICode = p1.charCodeAt(0);
            let newValue = +p2 + ASCIICode;
            let newChar = String.fromCharCode(newValue);
            let tempArr = word.split("");
            for (let index = 0; index < tempArr.length; index++) {
                if (p1 == tempArr[index]) {
                    tempArr[index] = newChar
                } else if (p1 !== tempArr[index]) {
                    continue;
                }
            }
            word = tempArr.join("")
            console.log(word);
        } else if (command == 'Validation') {
            if (word.length < 8) {
                console.log(`Password must be at least 8 characters long!`);
            }
            let numeric = /\w+/g
            let upper = /[A-Z]+/g
            let lower = /[a-z]+/g
            let number = /[0-9]+/g
            let firstCheck = numeric.test(word)
            if (firstCheck == false) {
                console.log(`Password must consist only of letters, digits and _!`);
            }
            let secondCheck = upper.test(word)
            if (secondCheck == false) {
                console.log(`Password must consist at least one uppercase letter!`);
            }
            let thirdCheck = lower.test(word)
            if (thirdCheck == false) {
                console.log(`Password must consist at least one lowercase letter!`);
            }
            let fourthCheck = number.test(word)
            if (fourthCheck == false) {
                console.log(`Password must consist at least one digit!`);
            }
        }
    }

}

solve(['invalidpassword*', 'Add 2 p', 'Replace i -50', 'Replace * 10', 'Make Upper 2', 'Validation', 'Complete'])