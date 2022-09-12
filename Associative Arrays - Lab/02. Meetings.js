function meetings(arr) {

    let res = {}

    for (let line of arr) {
        let [day, name] = line.split(' ')
        if (res.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            res[day] = name
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let day in res) {
        console.log(day, '->', res[day]);
    }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])