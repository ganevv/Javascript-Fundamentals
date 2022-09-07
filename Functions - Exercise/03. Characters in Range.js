function charactersInRange(char1, char2) {

    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0))
    let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0))

    let charArr = []

    for (let index = startChar + 1; index < endChar; index++) {
        charArr.push(String.fromCharCode(index))
    }
    console.log(charArr.join(" "));

}

charactersInRange('a', 'd')