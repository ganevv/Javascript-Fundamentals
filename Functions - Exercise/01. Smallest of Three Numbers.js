function smallestOfThreeNumbers(a, b, c) {


    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}


//
let smallestNum = (a, b, c) => Math.min(a, b, c)
console.log(smallestNum(a, b, c));
//

smallestOfThreeNumbers(2, 5, 3)