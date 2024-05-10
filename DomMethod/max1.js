function findMax(arr) {
    let i = 0;
    let maxNum = arr[0];
    do {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
        i++;
    } while (i < arr.length);
    console.log(`the maximum number in the array is : ${maxNum}`);
}

const myArray = [5, 6, 44, 3, 55, 222, 45, 43, 44];
findMax(myArray);
