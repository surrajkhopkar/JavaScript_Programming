function cutFruitPieces(fruit){
    return fruit * 4;
}


function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice
}

const drink = fruitProcessor(5,7);
console.log(drink);