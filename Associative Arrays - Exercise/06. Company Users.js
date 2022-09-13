function companyUsers(arr) {
    let listOfCompanies = {};
 
    for (let item of arr) {
        let [company, number] = item.split(' -> ');
 
        if (!listOfCompanies.hasOwnProperty(company)) {
            listOfCompanies[company] = [];
        }
 
        if (!listOfCompanies[company].includes(number)) {
            listOfCompanies[company].push(number);
        }
    }
 
    let sorted = Object.keys(listOfCompanies);
    sorted.sort((a, b) => a.localeCompare(b));
 
    for (let item of sorted) {
        console.log(item);
        for (let subItem of listOfCompanies[item]) {
            console.log(`-- ${subItem}`);
        }
    }
}