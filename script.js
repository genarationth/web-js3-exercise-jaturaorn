const calcost = (money,transation, interest) => {
    return money > 0 || transation >= 0 || interest >= 0 ? (money*transation)*interest:
    console.log('Please enter positive number');
}

console.log(calcost(10000,3.0,0.01));

const welguest = (name1,name2,name3) => {
    console.log(`Welcome ${name1},${name2},${name3}`);
}

welguest('Joe','Jack','Rohan')