function oddOccurrences(input) {

    let words = input.split(' ')
    let res = {}

    for (let word of words) {
        word = word.toLocaleLowerCase()
        if (res.hasOwnProperty(word)) {
            res[word]++
        } else {
            res[word] = 1
        }
    }

    let output = []

    for (let word in res) {
        if (res[word] % 2 == 1) {
            output.push(word)
        }
    }
    console.log(output.join(' '));

    // let filtered = Object.entries(res).filter(([word, count]) => count % 2 == 1)
    // console.log(filtered.map(entry => entry[0]).join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')