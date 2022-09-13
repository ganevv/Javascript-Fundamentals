function wordTracker(input) {

    let words = input.shift().split(' ')
    let res = {}

    for (let word of words) {
        res[word] = 0
    }

    for (let word of input) {
        if (res.hasOwnProperty(word)) {
            res[word]++
        }
    }
    let sorted = Object.entries(res)
    sorted.sort((a, b) => {
        return b[1] - a[1]
    })
    for (let [word, count] of sorted) {
        console.log(word, '-', count);
    }
}

wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])