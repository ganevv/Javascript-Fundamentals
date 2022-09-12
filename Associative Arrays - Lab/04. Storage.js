function storage(input) {

    let res = new Map()

    for (let line of input) {
        let [product, qty] = line.split(' ')
        qty = Number(qty)
        let existing = 0
        if (res.has(product)) {
            existing = res.get(product)
        }
        res.set(product, qty + existing)
    }
    for (let [product, qty] of res) {
        console.log(product, '->', qty);
    }
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])