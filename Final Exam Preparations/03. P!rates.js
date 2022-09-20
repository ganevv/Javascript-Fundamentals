function pirates(input) {

    let lines = input.shift()
    let targets = {}

    while (lines !== 'Sail') {
        let tokens = lines.split("||")
        let city = tokens[0]
        let population = Number(tokens[1])
        let gold = Number(tokens[2])

        if (!targets.hasOwnProperty(city)) {
            targets[city] = [population, gold]
        } else {
            targets[city][0] += population
            targets[city][1] += gold
        }
        lines = input.shift()
    }
    lines = input.shift()
    while (lines !== "End") {
        let tokens = lines.split("=>")
        let command = tokens[0]
        let city = tokens[1]
        let people = Number(tokens[2])
        let gold = Number(tokens[3])
        if (command == 'Plunder') {
            targets[city][0] -= people
            targets[city][1] -= gold
            if (targets[city][0] <= 0 || targets[city][1] <= 0) {
                if (targets[city][0] < 0) {
                    people = people + Number(targets[city][0])
                } else if (targets[city][1] < 0) {
                    gold = gold + Number(targets[city][1])
                }
                delete targets[city]
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                console.log(`${city} has been wiped off the map!`);
            } else {
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            }
        } else if (command == 'Prosper') {
            if (people > 0) {
                targets[city][1] += people
                console.log(`${people} gold added to the city treasury. ${city} now has ${targets[city][1]} gold.`);
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }
        lines = input.shift()
    }
    let citiesToPrint = Object.values(targets).length
    if (citiesToPrint < 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${citiesToPrint} wealthy settlements to go to:`);
        Object.entries(targets).forEach((key) => { console.log(`${key[0]} -> Population: ${key[1][0]} citizens, Gold: ${key[1][1]} kg`) })
    }
}

pirates((["Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail", "Plunder=>Tortuga=>75000=>380", "Prosper=>Santo Domingo=>180", "End"]))