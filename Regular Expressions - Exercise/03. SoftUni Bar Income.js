function softUniBarIncome(input) {

    let totalIn = 0

    for (let line of input) {
        let regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<quantity>[\d]+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/gm
        let res = regex.exec(line)
        if (res) {
            let totalPrice = Number(res.groups.quantity) * Number(res.groups.price)
            console.log(`${res.groups.customer}: ${res.groups.product} - ${totalPrice.toFixed(2)}`);
            totalIn += totalPrice
        } else if (line === "end of shift") {
            console.log(`Total income: ${totalIn.toFixed(2)}`);
        }
    }
}

softUniBarIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift'])