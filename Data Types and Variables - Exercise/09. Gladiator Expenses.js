function gladiatorExpenses(lostFights, helmetP, swordP, shieldP, armourP) {

    let totalP = 0

    for (let currentF = 1; currentF <= lostFights; currentF++) {
        if (currentF % 2 === 0) {
            totalP += helmetP
        }
        if (currentF % 3 === 0) {
            totalP += swordP
        }
        if (currentF % 6 === 0) {
            totalP += shieldP
        }
        if (currentF % 12 === 0) {
            totalP += armourP
        }
    }
    console.log(`Gladiator expenses: ${totalP.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5)