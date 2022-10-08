console.log("Part 1");

console.log(`1. 2 == '2': ${2 == '2'}`);
/* 
Returns true as JS will convert the variables to the same type then compare their values--which is true
*/

console.log(`2. 2 ===2: ${2 === 2}`);
/* 
Returns true as the two are of the same type and value
 */

console.log(`3. 10 % 3: ${10 % 3}`);
/* 
Returns the modoulo of 10/3 which is 1
 */

console.log(`4. 10 % 3 === 1: ${10 % 3 === 1}`);
/* 
Returns true since we know the left and the right side are strictly equal since they are of the same type and value
 */

console.log(`5. true && false: ${true && false}`);
/* 
Returns false since they are not of the same boolean type. The whole expression will evaluate to false (since one of the values is false).
 */

console.log(`6. false || true: ${false || true}`);
/* 
Returns true since we received a true value on the right hand side. The whole expression will evaluate to true (since one of the expressions are true).
 */

console.log(`7. true || false: ${true || false }`);
/* 
Returns true since we received a true value on the left hand side (the right hand side needs not to be evaluated). The whole expression will evaluate to true (since one of the expressions are true).
 */

console.log("Part 2");

let isLearning = true;

if (isLearning) {
    console.log("Keep it up!")
}
else {
    console.log("Pretty sure you are learning....");
}

console.log("1. The above code should console.log Keep it up since isLearning is a truthy statement. Therefore the if statement branch of the code is run.");

console.log("2. The if(isLearning === true) is not needed since the statement is already a truthy statement that evaluates to true. Having strict equality is very stringent, and not needed to ensure that the if statement is run. We have already satisfied the requirement with the boolean statement of true.");

let firstVariable;
let secondVariable = "";
let thirdVariable = 1;
let secretMessage = "Shh!";

if (firstVariable) {
    console.log("first");
}
else if (firstVariable || secondVariable) {
    console.log("second");
}
else if (firstVariable || thirdVariable) {
    console.log("third");
}
else {
    console.log("fourth");
}

console.log("1. The above code should console.log third since thirdVariable is the only truthy value that is used in the code. firstVariable is never initialized with a value, secondVariable has a falsy value, and secretMessage although has a truthy value it is never used in the if/else if/else statement to run");

console.log(`2. Undefined since it is declared but never initialized with a value. Using the typeOf method to verify and display answer: ${typeof (firstVariable)}`);

console.log("3. No it is type undefined which is a falsy value. It is undefined since it was initialized but never assigned a value.");

console.log("4. No it is an empty string, which is a falsy value.");

console.log("5. Yes the value of thirdVariable is a truthy value since it was not declared with a 0 value. All numbers are of a truthy value unless it is declared with a 0 the only falsy number for datatypes of numbers.");

console.log("Part 3");

function getRandomNumber() {
    return Math.random();
}

let randomNum = getRandomNumber();

if (randomNum > 0.5) {
    console.log("1. Over 0.5");
}
else {
    console.log("1. Under 0.5");
}

console.log("2. A falsy value evaluates to false. All of the falsy values in Javascript are: false, null, undefined, 0, \"\" (an empty string), and NaN");