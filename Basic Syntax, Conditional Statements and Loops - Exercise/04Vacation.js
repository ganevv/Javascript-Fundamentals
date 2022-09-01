function vacation(pplCount, groupType, dayOfWeek) {
    let studentFridayPrice = 8.45
    let businessFridayPrice = 10.9
    let regularFridayPrice = 15
    let studentSaturdayPrice = 9.8
    let businessSaturdayPrice = 15.6
    let regularSaturdayPrice = 20
    let studentSundayPrice = 10.46
    let businessSundayPrice = 16
    let regularSundayPrice = 22.5

    let studentDiscountPercentage = 15
    let businessDiscountPeople = 10
    let regularDiscountPercentage = 5

    let totalPrice = 0

    if (groupType === "Business" && pplCount >= 100) {
        pplCount -= businessDiscountPeople
    }
    if (groupType === "Students" && dayOfWeek === "Friday") {
        totalPrice += pplCount * studentFridayPrice
    } else if (groupType === "Students" && dayOfWeek === "Saturday") {
        totalPrice += pplCount * studentSaturdayPrice
    } else if (groupType === "Students" && dayOfWeek === "Sunday") {
        totalPrice += pplCount * studentSundayPrice
    } else if (groupType === "Regular" && dayOfWeek === "Friday") {
        totalPrice += pplCount * regularFridayPrice
    } else if (groupType === "Regular" && dayOfWeek === "Saturday") {
        totalPrice += pplCount * regularSaturdayPrice
    } else if (groupType === "Regular" && dayOfWeek === "Sunday") {
        totalPrice += pplCount * regularSundayPrice
    } else if (groupType === "Business" && dayOfWeek === "Friday") {
        totalPrice += pplCount * businessFridayPrice
    } else if (groupType === "Business" && dayOfWeek === "Saturday") {
        totalPrice += pplCount * businessSaturdayPrice
    } else if (groupType === "Business" && dayOfWeek === "Sunday") {
        totalPrice += pplCount * businessSundayPrice
    }
    if (groupType === "Students" && pplCount >= 30) {
        totalPrice -= (studentDiscountPercentage / 100) * totalPrice
    } else if (groupType === "Regular" && pplCount >= 10 && pplCount <= 20) {
        totalPrice -= (regularDiscountPercentage / 100) * totalPrice
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}


vacation(30, "Students", "Sunday")