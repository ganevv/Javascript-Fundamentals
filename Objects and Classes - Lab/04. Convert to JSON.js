function convertToJson(name, lastName, hairColor) {

    let obj = {
        name,
        lastName,
        hairColor
    }

    let res = JSON.stringify(obj)

    console.log(res);

}

convertToJson('George', 'Jones', 'Brown')