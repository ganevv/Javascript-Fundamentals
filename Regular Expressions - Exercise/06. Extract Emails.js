function extractEmails(input) {

    let regex = /(?<!\S)[a-zA-Z]+([\.\-\_]*[A-Za-z]+)*@[a-zA-Z]+([\.\-]*[a-zA-Z]+)*(\.[A-Za-z]+)/g
    let res = input.match(regex)

    for (let line of res) {
        console.log(line);
    }
}

extractEmails('Please contact us at: support@github.com.')