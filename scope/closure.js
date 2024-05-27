function arraySum() {
    let sum = 0;
  
    return function(arr) {
      sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    };
  }
  
  
  var sumArray = arraySum();
  
 
  var arr1 = [10, 20, 30, 40, 50];
  var arr2 = [3, 6, 9];
  
  console.log("Sum of arr1:", sumArray(arr1)); 
  console.log("Sum of arr2:", sumArray(arr2)); 
  