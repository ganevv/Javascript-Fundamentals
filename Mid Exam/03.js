function thirdTask(input) {

    let startingList = input.shift().split(', ')
    let number = Number(input.shift())

    for (let i = 0; i = input.length; i++) {
        let tokens = input.shift().split(', ')
        let command = tokens[0]
        if (command == 'Add') {
            let newCard = tokens[1]
            if (!(startingList.includes(newCard))) {
                startingList.push(newCard)
                console.log(`Card successfully added`);
            } else {
                console.log(`Card is already in the deck`);
            }
        } else if (command == 'Remove') {
            let newCard = tokens[1]
            if ((startingList.includes(newCard))) {
                let index = startingList.indexOf(newCard);
                startingList.splice(index, 1);
                console.log(`Card successfully removed`);
            } else {
                console.log(`Card not found`);
            }
        } else if (command == 'Remove At') {
            let index = Number(tokens[1])
            if (index >= 0 && index < startingList.length) {
                startingList.splice(index, 1);
                console.log(`Card successfully removed`);
            } else {
                console.log(`Index out of range`);
            }
        } else if (command === "Insert") {
            let index = Number(tokens[1])
            let newCard = tokens[2]
            if (index >= 0 && index < startingList.length) {
                if (startingList.includes(newCard)) {
                    console.log("Card is already added")
                } else {
                    startingList.splice(index, 0, newCard)
                    console.log("Card successfully added")
                }

            } else {
                console.log("Index out of range")
            }
        }
    } console.log(startingList.join(', '));
}

thirdTask(["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"])


thirdTask(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"])