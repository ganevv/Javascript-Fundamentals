function activationKeys(input) {

    let secretWord = input.shift()
    let currentLine = input.shift()

    while (currentLine !== 'Generate') {
        let tokens = currentLine.split('>>>')
        let command = tokens[0]
        let p1 = tokens[1]
        let p2 = tokens[2]
        let p3 = tokens[3]
        let tempMessage = ''
        if (command == 'Contains') {
            if (secretWord.hasOwnProperty(p1)) {
                console.log(`"${secretWord} contains ${p1}`);
            } else {
                console.log(`Substring not found!`);
            }
        } if (command == 'Flip') {
            if (p1 == 'Upper') {
                temp = secretWord.slice(Number(p2), Number(p3))
                final = temp.toUpperCase()
                secretWord = secretWord.replace(temp, final)
                console.log(secretWord);
            } else if (p1 == 'Lower') {
                temp = secretWord.slice(Number(p2), Number(p3))
                final = temp.toLowerCase()
                secretWord = secretWord.replace(temp, final)
                console.log(secretWord);
            }
        } if (command == 'Slice') {
            temp = secretWord.slice(Number(p1), Number(p2))
            secretWord = secretWord.replace(temp, "")
            console.log(secretWord);
        }
        currentLine = input.shift()
    }
    console.log(`Your activation key is: ${secretWord}`);
}

activationKeys((["abcdefghijklmnopqrstuvwxyz", "Slice>>>2>>>6", "Flip>>>Upper>>>3>>>14", "Flip>>>Lower>>>5>>>7", "Contains>>>def", "Contains>>>deF", "Generate"]))