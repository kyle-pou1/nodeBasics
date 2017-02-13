
//
//
//
// if (!isValid) {
//   console.log('Data is valid!')
// }else {
//   console.log('Data is not valid!')
// }
function toggleBoolean(bool) {
    if (typeof bool === 'boolean') {
        return !bool;
    }
    console.log('Not a boolean');
}

console.log(toggleBoolean(false))
