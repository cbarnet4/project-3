// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = (n) => {
   //your code goes here
   let result = '';
    if (n % 3 == 0) result = `${result}Bit`; {
    }
    if (n % 5 == 0) result = `${result}Bat`; {
    }
    if (n % 7 == 0) result = `${result}Bot`; {
    }
    if (n % 3 != 0 && n % 5 != 0 && n % 7 != 0) result = 'Not';
    return result;
};

let findAllbitBatBotOrNots1 = (arr) => {
   //your code goes here
   //use map method
return arr.map(each => `${each}: `+ bitBatBotOrNot(each));
};

let findAllbitBatBotOrNots2 = (arr) => {
   //your code goes here
   //use for statement
   let result = [];
     for (let i = 0; i < arr.length; i++){
       result.push(arr[i] + ': ' + bitBatBotOrNot(arr[i]));
     }
     return result;
};

let findAllbitBatBotOrNots3 = (arr) => {
   //your code goes here
   //use for..of statement
   let result = [];
   for(let each of arr){
   result.push(each + ': ' + bitBatBotOrNot(each));
 }
   return result;
};

let findAllbitBatBotOrNots4 = (arr) => {
   //your code goes here
   //use forEach method
   result = [];
   arr.forEach((each) => {
      let num = arr;
      result.push(each + ': ' + bitBatBotOrNot(each));
   });
   return result;
};

let findAllbitBatBotOrNotsXC = (arr) => {
   //your code goes here
   //use for statement
   result = [];
   for (let each in arr){
   result.push(arr[each] + ": " + bitBatBotOrNot(arr[each]));
 }
  return result;
};


//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
