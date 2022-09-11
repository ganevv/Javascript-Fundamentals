function storeProvision(arr1, arr2) {

    let storedProducts = {}

    for (let index = 0; index < arr1.length; index += 2) {
        let currProduct = arr1[index]
        storedProducts[currProduct] = Number(arr1[index + 1])
    }
    for (let index = 0; index < arr2.length; index += 2) {
        let currProduct = arr2[index]
        if (!storedProducts.hasOwnProperty(currProduct)) {
            storedProducts[currProduct] = 0
        }
        storedProducts[currProduct] += Number(arr2[index + 1])
    }

    for (let product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`);
    }

}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])