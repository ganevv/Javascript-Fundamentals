function passwordValidator(password) {

    function isLengthEnough(stringPassword) {
        return stringPassword.length >= 6 && stringPassword.length <= 10
    }
    function isHavingDigits(stringPassword) {
        for (let currCharIndex of stringPassword) {
            let currChar = currCharIndex.charCodeAt(0)
            if ((currChar >= 65 && currChar <= 97) || (currChar >= 97 && currChar <= 122) || (currChar >= 48 && currChar <= 57)) {
                return true
            } else {
                return false
            }
        }
    } function isHavingAtLeastTwoDigits(stringPassword) {
        let counter = 0
        for (let charIndex of stringPassword) {
            let currChar = charIndex.charCodeAt(0)
            if (currChar >= 48 && currChar <= 57) {
                counter++
            }
        }
        return counter >= 2 ? true : false
    }
    let isLengthValid = isLengthEnough(password)
    let isDigitsValid = isHavingDigits(password)
    let isHavingValid = isHavingAtLeastTwoDigits(password)

    if (isLengthValid && isDigitsValid && isHavingValid) {
        console.log(`Password is valid`);
    } if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    } if (!isDigitsValid) {
        console.log("Password must consist only of letters and digits");
    } if (!isHavingValid) {
        console.log("Password must have at least 2 digits");
    }
}

passwordValidator('logIn')