function furniture(input) {

    let totalSum = 0
    console.log("Bought furniture:");

    for (const line of input) {
        if (line === "Purchase") {
            break;
        }
        let regex = />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/
        let res = regex.exec(line)
        if (res !== null) {
            totalSum += +res.groups.price * +res.groups.quantity
            console.log(res.groups.name)
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"])