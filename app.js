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

