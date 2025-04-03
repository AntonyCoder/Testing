export function checkSystemPay(cardNumber) {
    const firstOneDigits = cardNumber.slice(0, 1);
    const firstTwoDigits = cardNumber.slice(0, 2);
    const firstThreeDigits = cardNumber.slice(0, 3);
    const firstFourDigits = cardNumber.slice(0, 4);
    const firstSixDigits = cardNumber.slice(0, 6);

    if (firstOneDigits === '4') return 'visa';

    if (['51', '52', '53', '54', '55'].includes(firstTwoDigits)) return 'mastercard';

    if (['34', '37'].includes(firstTwoDigits)) return 'american-express';

    if (['220'].includes(firstThreeDigits)) return 'mir';

    if (['644', '645', '646', '647', '648', '649'].includes(firstThreeDigits) ||
        ['65'].includes(firstTwoDigits) ||
        ['6011'].includes(firstFourDigits) ||
        Number(firstSixDigits) >= 622126 && Number(firstSixDigits <= 622925)) return 'discover';

    if (Number(firstFourDigits) >= 3528 && Number(firstFourDigits) <= 3589) return 'jcb';

    return 'Unknown';
}