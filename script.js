const calcost = (money,transation, interest) => {
    return money > 0 || transation >= 0 || interest >= 0 ? (money*transation)*interest:
    console.log('Please enter positive number');
}

console.log(calcost(10000,3.0,0.01));