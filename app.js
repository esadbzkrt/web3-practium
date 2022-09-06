//Calculate a numbers all digits and return the sum. Then return even or odd based on the sum.

function oddishOrEvenish(number) {
    let sum = 0;
    const num = number.toString();
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num.charAt(i));
    }
    if(sum%2 === 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}

console.log(oddishOrEvenish(13));
