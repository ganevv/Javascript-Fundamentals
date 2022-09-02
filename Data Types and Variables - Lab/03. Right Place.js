function rightPlace(word, char, match) {
    let res = ''

    for (let i = 0; i < word.length; i++) {
        if (word[i] == '_') {
            res += char
        } else {
            res += word[i]
        }
    }
    if (res == match) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong')