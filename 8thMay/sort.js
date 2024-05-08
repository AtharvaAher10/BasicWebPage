function sortNumbers(numbers){              // sorted the number in the given array //
    numbers.sort(function(a, b){
        return a - b;

    });
    return numbers;
}

const unsortednum = [3 , 2 ,7 , 9 , 4];
const sortedNumbers = sortNumbers(unsortednum);
console.log("sorted order of given array is :" , sortedNumbers);

// **********************************************************************************************************//



function sortNum(numbers){                       // sorted the number in the given array with diffrent logic //
    const length = numbers.length;
    for(let i=0 ; i< length-1 ; i++){
        for(let j = 0; j<length-i-1; j++){
            if(numbers[j] > numbers[j+1]){
                [numbers[j], numbers[j+1]] = [numbers[j+1], numbers[j]];
            }
        }
    }
    return numbers;
}
const unsortedNum = [34,56, 65, 89, 2, 10]
const sortedNum = sortNum(unsortedNum);
console.log(" the sorted numbers is :", sortedNum);



// // ******************************************************************************************************** //



function reverseString(str){                             // Print the string in reverse order //
    return str.split('').reverse().join('');
}
console.log(reverseString("Atharva"));

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("INDIA"));


