function secondTask(input) {

    let travelRoute = input.shift().split('||')
    let startingFuel = Number(input[0])
    let startingAmmo = Number(input[1])
    let failed = false

    while (travelRoute[0] != "Titan") {
        tokens = travelRoute.shift().split(' ')
        if (failed == false) {
            if (tokens[0] == 'Travel') {
                startingFuel -= tokens[1]
                if (startingFuel < 0) {
                    console.log(`Mission failed.`);
                    failed = true;
                } else {
                    console.log(`The spaceship travelled ${tokens[1]} light-years.`);
                }
            } else if (tokens[0] == 'Enemy') {
                let enemyArmour = tokens[1]
                if (startingAmmo >= enemyArmour) {
                    console.log(`An enemy with ${enemyArmour} armour is defeated.`)
                    startingAmmo -= enemyArmour;
                }
                else {
                    if (startingFuel >= enemyArmour) {
                        console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`)
                        startingFuel -= enemyArmour;
                    }
                    else {
                        console.log(`Mission failed.`)
                        failed = true;
                    }
                }
            } else if (tokens[0] == 'Repair') {
                let bonus = tokens[1]
                startingAmmo += bonus * 2
                startingFuel += bonus
                console.log(`Ammunitions added: ${bonus * 2}.`);
                console.log(`Fuel added: ${bonus}.`);
            }
        }
    } if (travelRoute == `Titan` && failed == false) {
        console.log(`You have reached Titan, all passengers are safe.`)
    }
}

secondTask(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100'])


