function train(arr) {

    let passengers = arr.shift().split(" ").map(Number)
    let maxCapacity = Number(arr.shift())

    for (let command of arr) {
        let curCommand = command.split(' ')
        if (curCommand[0] === "Add") {
            passengers.push(Number(curCommand[1]))
        } else {
            for (i = 0; i < passengers.length; i++) {
                if (passengers[i] + Number(curCommand[0]) <= maxCapacity) {
                    passengers[i] += Number(curCommand[0])
                    break;
                }
            }
        }
    } console.log(passengers.join(" "));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])