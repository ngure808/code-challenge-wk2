// takes in two parameters that act as the start and end of the array
function between(num1, num2){

    // creates an empty array that will store the generated array
    const numbers = [];

    // iterates through the range of values provided
    for (let i = num1; i <= num2; i++){
        
        // the numbers generated by the for loop are pushed to the empty array
        numbers.push(i)
    }
    // returns the formulated array
    return numbers 
}

// call the function with specific arguments
between()