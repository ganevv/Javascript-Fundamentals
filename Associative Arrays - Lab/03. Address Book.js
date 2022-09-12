function addressBook(input) {

    let res = {}

    for (let line of input) {
        let [name, adress] = line.split(':')
        res[name] = adress
    }
    let sorted = Object.entries(res)
    sorted.sort((a, b) => {
        let nameA = a[0]
        let nameB = b[0]
        return nameA.localeCompare(nameB)
        // sorted.sort((a, b) => a[0].localeCompare(b[0]))
    })
    for (let [name, adress] of sorted) {
        console.log(name, '->', adress);
    }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])