function destinationMapper(input) {

    let pattern = /(=|\/)(?<city>[A-Z][A-Za-z]{2,})\1/g
    let match = pattern.exec(input)
    let travelPoints = 0
    let res = [];

    while (match !== null) {
        let destination = match[2]
        res.push(`${destination}`)
        let points = destination.length
        travelPoints += points
        match = pattern.exec(input)
    }
    console.log(`Destinations: ${res.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")