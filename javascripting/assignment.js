let num = 153;

const checkPrime = (number) => {
    for(let i=2; i<Math.sqrt(Number(number)); ++i){
        if(number % i === 0)
            return true;
    }
    return true;
}

const checkArmstrong = (number) => {
    let checkNum = 0;
    const strNum = String(number);
    // console.log(number);
    for(let i=0; i<strNum.length; ++i){
        checkNum+=(Number(strNum[i]) ** 3);
        // console.log(checkNum);
    }
    return number == checkNum ? true : false;
}

console.log(`Is Prime?: ${checkPrime(num)}`);
console.log(`Is Armstrong?: ${checkArmstrong(num)}`);