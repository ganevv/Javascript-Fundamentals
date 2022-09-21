function decryptingCommands(input) {

    let word = input.shift()

    while (input[0] !== 'Finish') {
        let tokens = input.shift().split(' ')
        let command = tokens[0]
        let p1 = tokens[1]
        let p2 = tokens[2]

        if (command == 'Replace') {
            if (word.includes(p1)) {
                word = word.replace(p1, p2)
                if (word.includes(p1)) {
                    word = word.replace(p1, p2)
                } if (word.includes(p1)) {
                    word = word.replace(p1, p2)
                } if (word.includes(p1)) {
                    word = word.replace(p1, p2)
                }
                console.log(word);
            } else {
                console.log(word);
            }
        } else if (command == 'Cut') {
            if ((+p1 >= 0 && +p1 < word.length) && (+p2 >= 0 && +p2 < word.length)) {
                let tempWord = word.slice(0, p1)
                let tempWord2 = word.slice(+p2 + 1,)
                word = tempWord + tempWord2
                console.log(word);
            } else {
                console.log(`Invalid indices!`);
            }
        } else if (command == 'Make') {
            if (p1 == 'Upper') {
                word = word.toUpperCase()
                console.log(word);
            } else {
                word = word.toLowerCase()
                console.log(word);
            }
        } else if (command == 'Check') {
            if (word.includes(p1)) {
                console.log(`Message contains ${p1}`);
            } else {
                console.log(`Message doesn't contain ${p1}`);
            }
        } else if (command == 'Sum') {
            if ((+p1 >= 0 && +p1 < word.length) && (+p2 >= 0 && +p2 < word.length)) {
                let sum = 0
                let ascinum = 0
                let tempWord = word.substring(+p1, (+p2 + 1))
                for (let word of tempWord) {
                    let ascinum = +word.charCodeAt()
                    sum = sum + ascinum
                }
                console.log(sum);
            } else {
                console.log(`Invalid indices!`);
            }
        }
    }
}

decryptingCommands((["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 1 4", "Finish"]))