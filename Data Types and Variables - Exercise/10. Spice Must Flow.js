function spiceMustFlow(input) {

    let spiceExtracted = 0
    let dayCoutner = 0

    while (input >= 100) {
        dayCoutner++
        spiceExtracted += input - 26
        input -= 10
    }
    console.log(dayCoutner)
    if (dayCoutner != 0) {
        console.log(spiceExtracted - 26);
    } else {
        console.log(spiceExtracted);
    }
}

spiceMustFlow(111)