function sumFirstAndLast(arr) {

    let a = Number(arr.pop())
    let b = Number(arr.shift())
    console.log(a+b);

}


sumFirstAndLast(['20', '30', '40'])