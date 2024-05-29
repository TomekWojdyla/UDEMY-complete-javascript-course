const country = "Poland";
const continent = "Europe";
let population = 40;

console.log(country);
console.log(continent);
console.log(population);

//2
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//3
language = 'polish';
// isIsland = false // to da błąd -> nie da się zmienić 'const'

//4
console.log(population / 2);

population++;
console.log(population);

console.log(`Finland has bigger population than Finland? ${6000000 > population}`);

console.log(`Poland has bigger population than avarage country? ${33000000 < population}`);

const description = country + ' is in ' + continent + ', and its ' + population + ' milion people speak ' + language;

console.log(description);
population--;

//5
const description1 = `${country} is in ${continent}, and its ${population} milion people speak ${language}.`
console.log(description1)

//6
if (population > 33) {
    console.log(`${country}'s population is ${population - 33} greater than average`);
} else {
    console.log(`${country}'s population is ${33 - population} below the avarage`);
}

//7
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> False
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

//8
// const numNeighbours = Number(prompt('How many neighbor countries does your country have?'));
// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border.');
// } else {
//     console.log('No borders.');
// }

//9
const numNeighbours = 7
if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}.`);
} else {
    console.log(`${country} does not meet your criteria.`)
}

//10
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log(`MOST number of native speakers!`);
        break;
    case 'spanish':
        console.log(`2nd place in number of native speakers`);
        break;
    case 'english':
        console.log(`3rd place`);
        break;
    case 'hindi':
        console.log(`Number 4`);
        break;
    case 'arabic':
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :)`)
}

//11
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} avarage.`);

//12

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

const country1 = describeCountry('Finland', 6, 'Helsinki');
const country2 = describeCountry('Poland', 40, 'Warsaw');
const country3 = describeCountry('Germany', 80, 'Berlin');
console.log(country1, '\n' + country2, '\n' + country3);

//13
function percentOfWorld1(population) {
    return population / 7900 * 100;
}
const percent1 = percentOfWorld1(40);
const percent2 = percentOfWorld1(6);
const percent3 = percentOfWorld1(1400);
console.log(percent1, percent2, percent3);

const percentOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const percent4 = percentOfWorld2(40);
const percent5 = percentOfWorld2(6);
const percent6 = percentOfWorld2(1400);
console.log(percent4, percent5, percent6);

//14

const percentOfWorld3 = population => (population / 7900) * 100;
console.log(percentOfWorld3(1400));

//15
function describePopulation(country, population) {
    const countryPopulationPercentage = percentOfWorld1(population)
    return `${country} has ${population} million people, which is about ${countryPopulationPercentage}% of the world`
}

console.log(describePopulation('China', 1441));

//16
const populations = [11, 6, 1441, 200];
console.log(populations.length === 4);

const percentages = [percentOfWorld1(populations[0]), percentOfWorld1(populations[1]), percentOfWorld1(populations[2]), percentOfWorld1(populations[3])];
console.log(percentages);

//17
const neighbours = ['Germany', 'Czechia', 'Slovakia', "Ukraine", 'Belarus', 'Latvia', 'Russia'];
neighbours.push('Utopia');
neighbours.pop();
if (!neighbours.includes('Germany')) {
    console.log(`Probably not a central european country :D`);
} else {
    console.log(`YAY! boarder with Germany`);
}
neighbours[neighbours.indexOf('Czechia')] = 'Czech Republic';
console.log(neighbours);

//18
const myCountry = {
    country: 'Poland',
    capital: 'Warsaw',
    language: 'Polish',
    population: 40,
    neighbours: neighbours
};
console.log(myCountry);

//19