/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas"; //camel case - first word small letter, other with CAPS - popular in JS

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let jonas_matilda = "JM"; // _ dozwolone w nazwach zmiennych
let $function = 27; //$ dozwolony w nazwie zmiennej

let person = "jonas"; //pojedyncza zmienna z małej litery -> duże są dla obiektów
let PI = 3.1415; //stałe warto definiować jako ALL CAPS no PI = 3.14

let myFirstJob = "Coder"; //descriptive way of naming variables!!
let myCurrentJob = "Teacher";

let job1 = "programmer"
let job2 = "teacher"

console.log(myFirstJob)


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!' //kiedy zmienna juz jest zdefiniowana nie trezba używać let
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1901;
console.log(typeof year);

console.log(typeof null); //błąd w konsoli - bug in JS - pokazuje się obiekt co jest bzdurą...

let age = 30;
age = 31;

const birthYear = 1990;
// birthYear = 1991; // to będzie rzucać błędem - nie można zmieniać wartości przypisanej do const

//const job; // illegal - const nie może byc zostawione undefined

var job = "programmer"; // var było do zmiennych przed 2015 (przed ES6) teraz nie powinno się tego już używać tylko let lub const
job = "teacher";


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // ** rowniez operator potegowania

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

let x = 10 + 5; // x = 15
x += 10; // x = x + 10 (jak w Pythonie) = 25
x *= 4; // x = x*4 = 100
x++;  // x=x+1
x--; //x = x - 1
x--; //x=99
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // <,<,>=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);


//Operators Precedence  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2019);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 (odejmowanie jako wyższy priorytet), potem przypisanie '=' i przypisanie idzie right-to-left
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

//SECTION 17

const firstName = "Jonas";
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + "!";
console.log(jonas);

//template literal

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // jak w Python print(f""") - pojawiło sie od ES6 (2015) - backticks
console.log(jonasNew)

console.log(`just any string...`) // backtick działą też na zwykłe stringi

console.log('String with \n\
multiple \n\
lines') // to w zasadzie jest efekt buga :)

console.log(`String
multiple
lines`) // dużo prościej - bez znaków specjalnych \n\

//SECTION18
const age = 15;

// if - else controle structure
if (age >= 18) {
    console.log('Sarah can start driving license 😊'); //emoji: WIN command+kropka
} else {  // else jest oczywiście opcjonalny
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years ;)`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)

//SECTION 20
//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); // NaN in console - Nat a a NUmber
console.log(typeof NaN); // type of NaN is number

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old'); // + automatyzuje autokonwersję do stringów
console.log('23' - '10' - 3); // - automatyzuje autokonwersję do liczb (number)

console.log('23' / '2');

let n = '1' + 1;
n = n-1;
console.log(n); // strong do number -> konsola 10 (liczba)

//SECTION 21
// 5 faulty values in JS: 0, "", undefined, null, NaN -> when converted to False if converted to Boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) { //konwersja (coersion) wartości do boolean (False w tym wypadku bo 0)
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!")
}

let height = 0;
if (height) {
    console.log("yay height is defined!");
} else {
    console.log("Height is UNDEFINED");
}

//SECTION 22
//Equality operators == vs ===

const age = 18;
if (age === 18) console.log("You just become adult"); // jak jest jedna linia możan skipnąć {} === strict equality operator - nie wymusza zmiany typów

if (age == '18') console.log("You just become adult"); // == loose equality operator - wymusza zmianę typów - ten operator jest trudny w użyciu, raczej radzi sie unikac

const favourite = Number(prompt("What's your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool 23 is an amazing number');
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 9) {
    console.log("7 is also a cool number");
} else {
    console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) { //!== strict different oraz != loose different
    console.log("Why not 23?");
}

//SECTION 23 & 24
//Boolean Logic and LOgical operators

const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

// if (shouldDrive) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false;

console.log(hasDrivingLicense && hasGoodVision && isTired);

if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive...");
}

//SECTION 26
//Switch statement

const day = 'thursday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write coding examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}

//Section 27
//Statements and expressions

3 + 4 //expression - it produce a value
1991 //expression like above
true && false && !false //expression

if (23>10) { //if is a statement - it does not produce a value
    const str = '23 is bigger'; 
}

console.log(`I'm ${2037-1991} years old`) //próba wrzucenia if w literal template sie nie uda bo nie beda akcpetowane 'statements'

//Section 28
// The Conditional (ternary) operator

const age = 23;
age >= 18 ? console.log('I like to drink wine 😍') : // specjalna konstrukja -> warunek ? true (if) : false (else)
    console.log('I like to drink water');

const drink = age >= 18 ? 'wine 😍' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 😍' : 'water'}`);
*/
