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





------------------------------ QUESTION 9

Basic Algorithm Scripting: Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.





function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if ( func(arr[i]) ) {
      return arr[i]
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);





------------------------------ QUESTION 10

Basic Algorithm Scripting: Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.





function booWho(bool) {
  return typeof bool === 'boolean'
}

booWho(null);





------------------------------ QUESTION 11

Basic Algorithm Scripting: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function titleCase(str) {
  let wordsArr = str.toLowerCase().split(' ');

  let wordsMap = wordsArr.map(word => {
    return word.replace( word.charAt(0), word.charAt(0).toUpperCase() );
  })
  return wordsMap.join(' ')
}

titleCase("I'm a little tea pot");





------------------------------ QUESTION 12

Basic Algorithm Scripting: Slice and Splice

You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice(0, )
  newArr.splice(n, 0, ...arr1);
  return newArr
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);





------------------------------ QUESTION 13

Basic Algorithm Scripting: Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);





------------------------------ QUESTION 14

Basic Algorithm Scripting: Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function getIndexToIns(arr, num) {
  let newArr = arr.slice(0, );
  newArr.push(num);

  newArr.sort( (a, b) => {
    return a - b;
  })

  return newArr.indexOf(num)
}

getIndexToIns([40, 60], 50);





------------------------------ QUESTION 15

Basic Algorithm Scripting: Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function mutation(arr) {
  let firstElement = arr[0].toLowerCase();
  let secondElement = arr[1].toLowerCase();

  for (let i = 0; i < secondElement.length; i++) {
    if (firstElement.indexOf(secondElement[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);





------------------------------ QUESTION 16

Basic Algorithm Scripting: Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.





function chunkArrayInGroups(arr, size) {
  let tempArr = [];
  let chunkedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      tempArr.push(arr[i])
    } else {
      tempArr.push(arr[i]);
      chunkedArr.push(tempArr);
      tempArr = [];
    }
  }

  if (tempArr.length > 0) {
    chunkedArr.push(tempArr)
  }
  
  return chunkedArr
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);





*/