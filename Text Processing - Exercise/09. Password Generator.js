function passwordGenerator(input) {

    // let firstString = input[0]
    // let secondString = input[1]
    // let thirdString = input[2]
    // // same as bottom

    [firstString, secondString, thirdString] = input; //this is called destructuring an array !!!
    let combinedString = firstString.concat(secondString)
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let reversedPass = ""
    thirdString = thirdString.toLowerCase()
    let vowelsIndex = 0

    for (let i = 0; i < combinedString.length; i++) {
        if (vowels.includes(combinedString[i])) {
            let indexOfChar = vowelsIndex % thirdString.length
            vowelsIndex++
            let currChar = thirdString.charAt(indexOfChar)
            reversedPass += currChar.toUpperCase()
        } else {
            reversedPass += combinedString[i]
        }
    }
    console.log(`Your generated password is ${reversedPass.split('').reverse().join('')}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange'])