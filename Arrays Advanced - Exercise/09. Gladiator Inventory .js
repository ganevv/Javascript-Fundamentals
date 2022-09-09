function gladiator(array) {
    let equipment = array.shift().split(" ");
    for (let command of array) {
        let currCommand = command.split(" ");
        let token = currCommand[0];
        let action = currCommand[1];
        if (token === "Buy") {
            if (!(equipment.includes(action))) {
                equipment.push(action);
            }

        } else if (token === "Trash") {
            for (let item of equipment) {
                if (item === action) {
                    let index = equipment.indexOf(action);
                    equipment.splice(index, 1);
                }
            }
        } else if (token === "Repair") {
            for (let item of equipment) {
                if (item === action) {
                    let index = equipment.indexOf(action);
                    equipment.push(equipment.splice(index, 1));
                }
            }

        } else if (token === "Upgrade") {
            let actionTwo = action.split('-');
            for (let item of equipment) {
                if (actionTwo[0] === item) {
                    let index = equipment.indexOf(actionTwo[0]);
                    let wordToBeAdded = actionTwo[0] + ":" + actionTwo[1];
                    equipment.splice(index + 1, 0, wordToBeAdded);
                }
            }
        }
    }
    console.log(equipment.join(' '));
}



gladiator(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])

