// function employees(arr) {

//     let list = {}

//     for (let employee of arr) {
//         list.name = employee
//         list.number = employee.length
//         console.log(`Name: ${list.name} -- Personal Number: ${list.number} `);
//     }

// }

function employees(arr) {

    let list = []
    class Employee {
        constructor(name, length) {
            this.name = name
            this.length = length
        }
    }
    for (let employee of arr) {
        let curEmpl = new Employee(employee, employee.length)
        list.push(curEmpl)
    }
    list.forEach(curEmpl => console.log(`Name: ${curEmpl.name} -- Personal Number: ${curEmpl.length} `))
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])