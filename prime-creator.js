const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// ths function takes in numbers as a parameter
function filterPrime(numbers) {
    
    // the filter method makes a new array and uses the primeNums as its callback function 
    // then pushes the vlues that return true to the new array which now consists of prime numbers
    return numbers.filter(primeNums);
}

function primeNums(num1) {
    // checks if the number is less than or equal to 1 because all primes are greater than 1
    if (num1 <= 1) {
        return false;
    }

    // this loop simply searches for divisers that when divided with a number in an array it returns false if remainder = 0
    for (let r = 2; r <= Math.sqrt(num1); r++) {
        if (num1 % r === 0) {
            return false;
        }
    }

    // if a number goes through the loop and does not return false it exits the loop and return true
    return true;
}

console.log(filterPrime(numbers));