function adAstra(input) {

    let text = input[0]
    let pattern = /([#\||])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})\1(?<caloriesNum>[0-9]{1,5})\1/g
    let match = null
    let totalCalories = 0
    let provisions = []

    while (match = pattern.exec(text)) {
        let item = match.groups['itemName']
        let expDate = match.groups['expirationDate']
        let calories = match.groups['caloriesNum']
        totalCalories += +calories
        provisions.push(`Item: ${item}, Best before: ${expDate}, Nutrition: ${calories}`)
    }
    let daysToLast = Math.floor(totalCalories / 2000)
    console.log(`You have food to last you for: ${daysToLast} days!`);
    console.log(provisions.join('\n'));
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])