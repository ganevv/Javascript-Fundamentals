function bossRush(input) {

    let num = +input.shift()
    let pattern = /[|](?<boss>[A-Z]{4,})[|]:[#](?<title>[A-Za-z]+[ ][A-Za-z]+)[#]/g
    let match = pattern.exec(input)

    for (let i = 0; i < num; i++) {
        if (input[0].match(pattern)) {
            let bossName = match[1]
            let title = match[2]
            match = pattern.exec(input)
            console.log(`${bossName}, The ${title}`);
            console.log(`>> Strength: ${bossName.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log(`Access denied!`);
        }
    }
}

bossRush(['3', '|PETER|:#Lead architect#', '|GEORGE|:#High Overseer#', '|ALEX|:#Assistant Game Developer#'])