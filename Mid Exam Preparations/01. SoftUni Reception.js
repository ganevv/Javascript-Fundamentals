function softUniReception(input) {

    let a = Number(input[0])
    let b = Number(input[1])
    let c = Number(input[2])
    let efficiency = a + b + c
    let students = Number(input[3])
    let time = 0

    while (students > 0) {
        time++
        if (time % 4 !== 0) {
            students -= efficiency
        }
    }
    console.log(`Time needed: ${time}h.`);
}


softUniReception(['5', '6', '4', '20'])