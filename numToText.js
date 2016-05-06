/*
Create a function using recursion called numToText which takes a
string and returns a new string with all numeric numbers from the
input string converted to their corresponding text words. You can
assume that the numbers in the string are single digit nubmers.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numbers = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  0: 'zero'
};

/********************************** Solution 1 *********************************/

var numToTextOne = function(str) {
  var result = '';

  if(str.length === 0) {
    return result;
  } else {
    var currentChar = str.charAt(0);
    if(numbers.hasOwnProperty(currentChar)) {
      result += numbers[currentChar]; // same as `result = result.concat(numbers[currentChar])``
    } else {
      result += currentChar;
    }
    return result + numToTextOne(str.slice(1)); // same as `return result.concat(numToText(str.slice(1)))`
  }
};


/********************************** Solution 2: Passing in the result array with ever recursive call *********************************/

var numToTextTwo = function(str, result) {
  result = result || [];

  if(str.length === 0) {
    return result.join('');
  } else {
    var currentChar = str.charAt(0);
    if(numbers[currentChar]){
      result.push(numbers[currentChar]);
    } else {
      result.push(currentChar);
    }
    return numToTextTwo(str.slice(1), result);
  }

};

/********************************** Solution with inner recursive function (Not recommended) *********************************/

var numToTextThree = function(str) {
  var result = '';

  var createNewString = function(string) {
    if(string.length === 0) {
      return;
    } else {
      var currentChar = string.charAt(0);
      if(numbers.hasOwnProperty(currentChar)) {
        result += numbers [currentChar] // same as `result = result.concat(numbers[currentChar])`
      } else {
        result = result.concat(currentChar);
      }
      return createNewString(string.slice(1));
    }
  }

  createNewString(str);

  return result;

};

console.log(numToTextOne("I have 5 dogs and 6 ponies"));
console.log(numToTextTwo("I have 5 dogs and 6 ponies"));
console.log(numToTextThree("I have 5 dogs and 6 ponies"));


