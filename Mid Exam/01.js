function firstTask(input) {

    let biscuitsPerWorker = Number(input[0])
    let workers = Number(input[1])
    let rivalFactory = Number(input[2])
    let biscuitsPerDay = 0
    let days = 0

    while (days < 30) {
        days++
        if (days % 3 !== 0) {
            biscuitsPerDay += biscuitsPerWorker * workers
        } else {
            biscuitsPerDay += Math.floor(biscuitsPerWorker * workers * 0.75)
        }
    }
    console.log(`You have produced ${biscuitsPerDay} biscuits for the past month.`);
    if (biscuitsPerDay > rivalFactory) {
        let difference = (((biscuitsPerDay - rivalFactory) / rivalFactory) * 100).toFixed(2)
        console.log(`You produce ${difference} percent more biscuits.`);
    } else {
        let difference = (((rivalFactory - biscuitsPerDay) / rivalFactory) * 100).toFixed(2)
        console.log(`You produce ${difference} percent less biscuits.`);
    }
}

firstTask(["163","16","67020"])
