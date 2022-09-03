function calculator(num1, operation, num2) {

    switch (operation) {
        case '+':
            sum = num1 + num2
            console.log(sum.toFixed(2));
            break;
        case '-':
            sum = num1 - num2
            console.log(sum.toFixed(2));
            break;
        case '*':
            sum = num1 * num2
            console.log(sum.toFixed(2));
            break;
        case '/':
            sum = num1 / num2
            console.log(sum.toFixed(2));
            break;
    }
}

calculator(5, '+', 10)