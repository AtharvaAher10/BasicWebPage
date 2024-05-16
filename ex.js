function removeDuplicates(arr) {
    let unqArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (unqArray.indexOf(arr[i]) === -1) {
            unqArray.push(arr[i]);
        }
    }
    return unqArray;
}
let inputArray = [4, 5, 6, 6, 7, 8, 4, 4, 9];
let outputArray = removeDuplicates(inputArray);
console.log(outputArray);
