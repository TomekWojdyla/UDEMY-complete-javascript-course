'use strict'

//Challange 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    const ratioDolphinsKoalas = avgDolphins / avgKoalas;
    if (ratioDolphinsKoalas >= 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (ratioDolphinsKoalas <= 0.5) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        console.log(`No team wins...`)
        return `No team wins...`
    }
}

//Challange 2

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        const tip = bill * 0.15;
        return tip;
    } else {
        const tip = bill * 0.2;
        return tip
    }
}

//const bills = [125, 555, 44];
//const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

//const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

//console.log(calcTip(500));

//Challange 3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
};

console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${john.bmi > mark.calcBMI() ? 'higher' : 'lower'} than ${mark.fullName}'s BMI (${mark.bmi})`);

//alt
if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
};

//Challange 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
    console.log(bills[i], tips[i], totals[i])
};

function calcAverage(arr) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }
    avg = sum / arr.length;
    return avg
};

console.log(calcAverage(totals));
