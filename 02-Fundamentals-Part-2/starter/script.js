'use strict';
/*
//SECTION 32
//Activating Strict Mode

'use strict'; // to musi być pierwsza linia kodu - bezpieczniejszy kod: pewne rzeczy zabrania użyć, pewne błedy uwydatnia w konsoli

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive!`);

//const interface = 'Audio';
//const private = 534;
//const if = 23;

//SECTION 33
//Functions

function logger() {
    console.log('My name is Jonas');
}

//calling, running or envoking the function -> znaczy to samo
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); //build-in function

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//SECTION 34
//Function Declarations vs Expressions


//Declaration -> można wywoływać funkcję w kodzie zanim jeszcze jest zdefiniowana
const age1 = calcAge1(1991);
console.log(age1);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

//Expression (annonymous function) -> zmienna przechowuje funkcje -> nie da sie wywołać funkcji zanim sie ją zdefiniuje w kodzie
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

//SECTION 35
//Arrow Functions

//Arrow function example
const calcAge3 = birthYear => 2037 - birthYear; //po strzałce jest return

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => { //przy większej ilości parametrów, wrzucamy nawias, przy bardziej skomplikowanej, wielowierszowej instrukcji wracamy do {}
    const age = 2037-birthYear;
    const retirement = 65 - age;
    //return retirement; //return potrezbny
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

//SECTION 36
// Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//SECTION 37
//Revieving Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`)
        return -1;
    }

    //return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

//SECTION 39
//Introduction to Arrays -> array is not immutable, można zmieniać pojedyncze wyrazy pomimo const

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']; //literal syntax
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); //ostatni element - nie działą jak w Pythonie [-1]

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, "Schmedtmann", 2037 - 1991, 'teacher', friends];
console.log(jonas);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
//ex
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

//SECTION 40
//Basic Array Operations (Methods)

//Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); //dodaje na końcu array a jako funkcja zwraca nowa długość array

console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends); //dodaje na początku array a jako funkcja zwraca nowa długość array

//Remove elements
friends.pop(); //remove last one -> returns removed element
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); //Usuwa 1 wyraz -> returns removed element
console.log(friends);

//return index
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); //jeżeli wartości nie ma w liście to zwracana w konsoli jest -1

console.log(friends.includes('Steven')); //true jeżeli wyraz jest w liście i false jeżeli nie jest, pracuje na === strict equality
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log('You have a friend named Steven');
}

//SECTION 42
//Introduction to objects (pythonowy słownik)

const jonas = { // object literal syntax (order doesn't matter - same as Python - good for unstructured data)
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
}; //5 properties and values (key-values)

//SECTION 43
//Dot vs. Bracket notation for Objects


const jonas = { // object literal syntax (order doesn't matter - same as Python - good for unstructured data)
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

//dot notation
console.log(jonas.lastName); //tutaj po kropce musi być gotowy szukany klucz a nie expression jak poniżej

//brackets notation
console.log(jonas['lastName']); //można wykorzystać w tym zmienne w nawiasach

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas. Choose between firstName, lastName, age, job and friends');
console.log(interestedIn);

console.log(jonas.interestedIn); //nie zadziała - nie ma takiego klucza -> undefined

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request. Choose between firstName, lastName, age, job and friends');
};

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

//Challange
//"JOnas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

//SECTION 44
//Objects methods

const jonas = { // object literal syntax (order doesn't matter - same as Python - good for unstructured data)
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDrivingLicense: true,

    // calcAge: function (birthYear) { //any function that is attached to an object is called a METHOD - it needs to be a function expression
    //     return 2037 - birthYear
    // }

    // calcAge: function () { //znika parametr na wejsciu i pojawia się this w wywołaniu funkcji
    // //    console.log(this);
    //     return 2037 - this.birthYear
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        this.getSummary = (`${this.firstName} is a ${this.calcAge()}-years old ${this.job} and he ${this.hasDrivingLicense ? 'a' : 'no'} has driver's license`); //w warunku nie trezba === true bo zmienna juz sama jest true
        return this.getSummary;
    }
};

console.log(jonas.calcAge());
//console.log(jonas['calcAge'](1991)); //rownoważne z powyższym

console.log(jonas.age); //jeżeli juz raz jest policzone to potem można wywołać klucz


//Challange
//"Jonas is a 46-year old teacher and he has a/no driver's license."

console.log(jonas.getSummary());

//SECTION 46
//The FOR loops


//console.log('Lifting weights repetition 1 🏋️‍♂️');

//for loop keeps running while condition is TRUE, iteration goes +1 rep++
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
};

//SECTION 47
//Looping Arrays, Breaking and Continuing

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    //Filling the types array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
};

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
};

console.log(ages);

//continue and break
console.log('--ONLY STRINGS--')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
};

console.log('--BREAL WITH NUMBER--')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
};

//SECTION 48
//Looping backwards and loops in loops

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

//how to loop backwards
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i], typeof jonas[i]);
};

for (let excersise = 1; excersise <= 3; excersise++) {
    console.log(`-----STARTING EXCERCISE ${excersise}`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Excercise ${excersise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
    };
};
*/

//SECTION 49
//WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// };

let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
    rep++;
};

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}