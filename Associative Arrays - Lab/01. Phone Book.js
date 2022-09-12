function phoneBook(arr) {

    let res = {}

    for (let line of arr) {
        let tokens = line.split(' ')
        let name = tokens[0]
        let phone = tokens[1]


        res[name] = phone
    }
    for (let name in res) {
        console.log(`${name} -> ${res[name]}`);
    }
}

phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])