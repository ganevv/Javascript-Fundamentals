function secretChat(input) {

    let commands = {
        InsertSpace,
        Reverse,
        ChangeAll
    }

    let text = input.shift()
    while (input[0] !== 'Reveal') {
        let tokens = input.shift().split(':|:')
        let name = tokens[0]
        let p1 = tokens[1]
        let p2 = tokens[2]
        let command = commands[name]
        text = command(text, p1, p2)
    }

    console.log(`You have a new text message: ${text}`);

    function InsertSpace(text, index) {
        let left = text.slice(0, index)
        let right = text.slice(index)
        let res = left + ' ' + right
        console.log(res);
        return res
    }
    function Reverse(text, substr) {
        let index = text.indexOf(substr)
        if (index != -1) {
            let left = text.slice(0, index)
            let right = text.slice(index + substr.length)
            let res = left + right + substr.split('').reverse().join('')
            console.log(res);
            return res
        } else {
            console.log('error');
            return text
        }
    }
    function ChangeAll(text, substr, replacement) {
        let res = text.split(substr).join(replacement)
        console.log(res);
        return res
    }
}


secretChat(['heVVodar!gniV', 'ChangeAll:|:V:|:l', 'Reverse:|:!gnil', 'InsertSpace:|:5', 'Reveal'])