function sortAnArrayBy2Criteria(arr) {

    let newArr = []

    for (let element of arr) {
        if (element.length < (element + 1).length) {
            newArr.unshift(element)
            newArr = newArr.sort((a, b) => a.length - b.length || a.localeCompare(b))
        }
    }
    console.log(newArr.join("\n"));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])