export function isValid(cardNumber) {
    let sum = 0;
    const length = cardNumber.length
    const parity = length % 2;
    const cardNumberArr = cardNumber.split('').map(Number)
    for (let i = length - 2; i >= 0; i--) {
        const num = cardNumberArr[i];
        if (i % 2 !== parity) {
            sum = sum + num;
        } else if (num > 4) {
            sum = sum + 2 * num - 9;
        } else {
            sum = sum + 2 * num;
        }
    }
    return cardNumberArr[length - 1] === ((10 - (sum % 10)) % 10);
}
