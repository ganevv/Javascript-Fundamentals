function thePianist(input) {

    let n = Number(input.shift())
    let modList = {}

    for (i = 0; i < n; i++) {
        let list = input.shift().split("|")
        let piece = list[0]
        let composer = list[1]
        let key = list[2]
        modList[piece] = {
            composer,
            key,
        }
    }
    while (input[0] !== "Stop") {
        let tokens = input.shift().split("|")
        let command = tokens[0]
        let piece = tokens[1]
        let p1 = tokens[2]
        let p2 = tokens[3]
        if (command == 'Add') {
            if (!modList.hasOwnProperty(piece)) {
                modList[piece] = {}
                modList[piece].composer = p1
                modList[piece].key = p2
                console.log(`${piece} by ${p1} in ${p2} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command == 'Remove') {
            if (modList.hasOwnProperty(piece)) {
                delete modList[piece]
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command == 'ChangeKey') {
            if (modList.hasOwnProperty(piece)) {
                modList[piece].key = p1
                console.log(`Changed the key of ${piece} to ${p1}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }
    let result = Object.entries(modList)
    for (let [name, properties] of result) {
        console.log(`${name} -> Composer: ${properties.composer}, Key: ${properties.key}`)
    }
}

thePianist(['3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C# Major', 'Stop'])