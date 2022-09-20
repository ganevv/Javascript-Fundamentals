function emojiDetector(input) {

    let text = input[0]
    let pattern = /([*]{2}|[:]{2})(?<emojiGroup>[A-Z][a-z]{2,})\1/gm
    let match = pattern.exec(text)
    let digitsPatern = /\d/g
    let matchDigits = digitsPatern.exec(text)
    let coolLevel = 1
    let count = 0
    let result = []
    let countOfEmojis = 0

    while (matchDigits !== null) {
        coolLevel *= Number(matchDigits[0]);
        matchDigits = digitsPatern.exec(text);
    }
    while (match !== null) {
        countOfEmojis++
        let emoji = match[2]
        for (let char of emoji) {
            count += char.charCodeAt()
        } if (count > coolLevel) {
            result.push(match[0])
        }
        match = pattern.exec(text)
        count = 0
    }
    console.log(`Cool threshold: ${coolLevel}`);
    console.log(`${countOfEmojis} emojis found in the text. The cool ones are:`);
    result.forEach(x => console.log(x));
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])