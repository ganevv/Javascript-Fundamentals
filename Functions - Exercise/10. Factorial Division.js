function factorialDivision(a, b) {

    function factorialCalc(number) {
        let res = 1
        while (number != 1) {
            res *= number
            number -= 1
        }
        return res
    }
    let finalRes = factorialCalc(a) / (factorialCalc(b))
    console.log(finalRes.toFixed(2))
}



factorialDivision(5, 2)