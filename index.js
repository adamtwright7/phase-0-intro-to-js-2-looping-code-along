function writeCards(stringArray,eventName) {
    let outArray = []
    for (let i =0; i<stringArray.length; i+=1) {
        outArray = [...outArray,
        `Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`]
    }
    return outArray 
}

function countDown(number) {
    let i2 = 0 
    while (i2 <= number) {
        console.log(number-i2)
        i2 +=1
    }
}