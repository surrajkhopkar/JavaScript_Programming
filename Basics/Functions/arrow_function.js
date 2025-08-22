const calcAge = birthYear => 2037 - birthYear;
const age = calcAge(1992);
console.log(age);

const yearsUntillRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntillRetirement(1991));



