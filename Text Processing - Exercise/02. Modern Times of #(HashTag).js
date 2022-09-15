function modernTimesOfHashTag(input) {

    let words = input.split(' ')

    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            asciiCode = word.charCodeAt(1)
            let isLetter = (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)
            if (isLetter) {
                console.log(word.substring(1));
            }
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')