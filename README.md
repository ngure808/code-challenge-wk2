# CODE CHALLLENGE WEEK 2

#### DATE 1/04/24

#### By *Ryan Mwangi*

## DESCRIPTION
### 1st challenge : swapcase
- A variable is declared containing a string

- function block :
  - .split method splits the declared string into a an array of words

  - .map method iterates through the array of words passing them to the  callback function which using .chaAT method lowercases the first letter then .slice method cuts from the second character of the word and returns it in uppercase

  - .join method joins the previously split string back to a string

### 2nd challenge : array-between 
- function block : 
  - takes two numbers as its parameters 
  - declare an empty array

  - a for loop that uses the parameters as a range of numbers ending at the last parameter(inclusive) then this range of numbers is pushed to the empty array 

### 3rd challenge : prime number creator
- an array of numbers is declared
- 1st function :
    - uses the filter method on the declared array and the 2nd function as a callback function, this will push the values to the new array created by the filter method

- 2nd function : 
    - if statement that checks if a number is <= 1
    - for loop that searches for divisers of the numbers in the array that when divided the remainder = 0 and returns false
    - if a number goes through this loop and does satisfy the conditions it exits the loop and return true (this the prime numbers which are only divisibe by 1 and themselves)

# Live Link
[text](https://github.com/ngure808/code-challenge-wk2.git)

## Techonologies used
- JavaScript

### License
The content of this site is licensed under the MIT License
Copyright (c) 2024