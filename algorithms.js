/*

------------------------------ QUESTION 1

Basic Algorithm Scripting: Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

Don't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.





function convertToF(celsius) {
    return celsius * 9/5 + 32;
  }
  
convertToF(30);





------------------------------ QUESTION 2

Basic Algorithm Scripting: Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function reverseString(str) {
  return str.split('').reverse('').join('');
}

reverseString("hello");





------------------------------ QUESTION 3


Basic Algorithm Scripting: Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function factorialize(num) {
  if (num == 0) {
    return 1
  } return num * factorialize(num - 1)
}

factorialize(5);





------------------------------ QUESTION 4

Basic Algorithm Scripting: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function findLongestWordLength(str) {
  let longestWordLength = 0;
  let wordsInString = str.split(' ');

  for (let i = 0; i < wordsInString.length; i++) {
    if (wordsInString[i].length > longestWordLength) {
      longestWordLength = wordsInString[i].length
    }
  } return longestWordLength
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");





------------------------------ QUESTION 5

Basic Algorithm Scripting: Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function largestOfFour(arr) {
  let largestNumbersArr = [];

  for (let i = 0; i < arr.length; i++) {
    largestNumbersArr.push(Math.max(...arr[i]))
  }
  return largestNumbersArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);





------------------------------ QUESTION 6

Basic Algorithm Scripting: Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function confirmEnding(str, target) {
  let endingToConfirm = str.slice(-target.length)
  return endingToConfirm == target
}

confirmEnding("Bastian", "n");





------------------------------ QUESTION 7

Basic Algorithm Scripting: Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function repeatStringNumTimes(str, num) {
  let repeatedString = "";

  for (let i = 0; i < num; i++) {
    repeatedString += str
  }
  return repeatedString;
}

repeatStringNumTimes("abc", 3);





------------------------------ QUESTION 8

Basic Algorithm Scripting: Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "..."
  } return str
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);





*/