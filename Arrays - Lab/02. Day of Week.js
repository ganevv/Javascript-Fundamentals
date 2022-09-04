function dayOfWeek(a) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    if (a >= 1 & a <= 7) {
        console.log(days[a - 1]);
    } else {
        console.log(`Invalid day!`);
    }
}


dayOfWeek(3)