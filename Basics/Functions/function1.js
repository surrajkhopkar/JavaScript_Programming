function logger(){
    console.log("My name is Dave");
}


//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0))

const appleOrangeJuice = fruitProcessor(4,6);
console.log(appleOrangeJuice);