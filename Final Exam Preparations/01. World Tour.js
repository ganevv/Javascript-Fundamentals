function worldTour(input) {

    let word = input.shift()

    while (input[0] !== 'Travel') {
        let tempWord = ""
        let tokens = input.shift().split(':')
        let command = tokens[0]
        let p1 = tokens[1]
        let p2 = tokens[2]
        if (command === 'Add Stop') {
            if (+p1 < word.length) {
                let tempWord1 = word.slice(+p1,)
                let tempWord2 = word.slice(0, +p1)
                word = tempWord2 + p2 + tempWord1
                console.log(word);
            } else {
                console.log(word);
            }
        } else if (command === 'Remove Stop') {
            if (+p1 < word.length && +p2 < word.length) {
                let tempWord = word.slice(0, p1)
                let tempWord2 = word.slice(+p2 + 1,)
                word = tempWord + tempWord2
                console.log(word);
            } else {
                console.log(word);
            }
        } else if (command === 'Switch') {
            if (word.includes(p1)) {
                word = word.replace(p1, p2)
                console.log(word);
            } else {
                console.log(word);
            }
        }
    }
    console.log(`Ready for world tour! Planned stops: ${word}`);
}

worldTour((["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"]))