// Function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression (Anonymous function)

const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

