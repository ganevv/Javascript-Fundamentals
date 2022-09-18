function guineaPig(input) {

    let foodInGrams = Number(input[0] * 1000)
    let hayInGrams = Number(input[1] * 1000)
    let coverInGrams = Number(input[2] * 1000)
    let puppyWeight = Number(input[3] * 1000)
    let days = 0
    while (days < 30) {
        days++
        foodInGrams -= 300

        if (days % 2 == 0) {
            hayInGrams -= (foodInGrams / 100 * 5)
        }
        if (days % 3 == 0) {
            coverInGrams -= (puppyWeight / 3)
            console.log();
        }
    }
    if (foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0) {
        console.log(`Merry must go to the pet store!`);
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
    }

}

guineaPig(['1', '1.5', '3', '1.5'])