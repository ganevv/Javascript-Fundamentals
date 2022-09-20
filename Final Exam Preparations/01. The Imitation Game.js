function theImitationGame(input) {

    let message = input.shift()
    let currLine = input.shift()

    while (currLine !== "Decode") {
        let tempMessage = ""
        let tokens = currLine.split('|')
        let command = tokens[0]
        let p1 = tokens[1]
        let p2 = tokens[2]
        if (command === 'Move') {
            p1 = Number(p1)
            let lettersToMove = message.substring(0, p1)
            tempMessage = message.replace(lettersToMove, "")
            tempMessage += lettersToMove
            message = tempMessage
        } else if (command === 'Insert') {
            p1 = Number(p1)
            tempMessage = message.split("");
            tempMessage.splice(p1, 0, p2)
            message = tempMessage.join("")
        } else if (command === 'ChangeAll') {
            while (message.includes(p1)) {
                tempMessage = message.replace(p1, p2)
                message = tempMessage
            }
            message = tempMessage
        }
        currLine = input.shift()
    }
    console.log(`The decrypted message is: ${message}`);
}

theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])