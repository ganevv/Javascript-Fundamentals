function replaceRepeatingChars(text) {

    let unique = ""

    for (let index = 0; index < text.length; index++) {
        let currChar = text.charAt(index)
        let nextChar = text.charAt(index + 1)
        if (currChar !== nextChar) {
            unique += currChar
        }
    }
    console.log(unique);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')