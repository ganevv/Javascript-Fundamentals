function shoppingList(input) {

    let startingList = input.shift().split('!')

    while (input[0] != "Go Shopping!") {
        let tokens = input.shift().split(' ')
        let command = tokens[0]
        let itemOrOldItem = tokens[1]
        let newItem = tokens[2]
        if (command == 'Urgent') {
            if (!(startingList.includes(itemOrOldItem))) {
                startingList.unshift(itemOrOldItem);
            }
        } else if (command == 'Unnecessary') {
            if ((startingList.includes(itemOrOldItem))) {
                let index = startingList.indexOf(itemOrOldItem);
                startingList.splice(index, 1);
            }
        } else if (command == 'Correct') {
            if ((startingList.includes(itemOrOldItem))) {
                let index = startingList.indexOf(itemOrOldItem);
                startingList.splice(index, 1, newItem);
            }
        } else if (command == 'Rearrange') {
            if ((startingList.includes(itemOrOldItem))) {
                let index = startingList.indexOf(itemOrOldItem);
                let temp = itemOrOldItem
                startingList.splice(index, 1)
                startingList.push(temp);
            }
        }
    } console.log(startingList.join(", "));
}


shoppingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Milk", "Correct Tomatoes Potatoes", "Go Shopping!"])
