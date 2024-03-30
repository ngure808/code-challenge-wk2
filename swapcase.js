const chad = "Capitalize Every Other Letter."

function swapCase () {

    // splits the string provided into an array of words
    const apart = chad.split(" ")

    // maps through each element of the array 
    const damn = apart.map(string => {

        // returns the first letter to lower case and the rest is capitalized
        return string.charAt(0).toLowerCase() + string.slice(1).toUpperCase()
    })

    // due to the above split method we join to ensure a string is returned or printed to the console
    return damn.join(" ")
}

swapCase()