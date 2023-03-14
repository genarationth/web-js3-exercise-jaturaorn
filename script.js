// const calcost = (money,transation, interest) => {
//     return money > 0 || transation >= 0 || interest >= 0 ? (money*transation)*interest:
//     console.log('Please enter positive number');
// }

// console.log(calcost(10000,3.0,0.01));

// const welguest = (name1,name2,name3) => {
//     console.log(`Welcome ${name1},${name2},${name3}`);
// }

// welguest('Joe','Jack','Rohan')

// const calage = (currentYear,birthYear) => {
//     return currentYear - birthYear;
// }
// console.log(calage(2023,1998));

const Guest = (Name1,Name2,Name3,Age1,Age2,Age3) => {
    console.log(`Welcome ${Name1}, you are ${Age1}. Welcome ${Name2}, You are ${Age2}.
     Welcome ${Name3}, you are ${Age3}`)
}

Guest('Jacob',35,'Ann',40,'Max',24);