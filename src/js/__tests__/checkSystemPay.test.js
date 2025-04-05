import { checkSystemPay } from "../checkSystemPay"

test('Проверка принадлежности к определенной системе оплаты', () => {
    const cards = [
        {
            name: 'mastercard',
            number: '5178007629893157',
        },
        {
            name: 'visa',
            number: '4532419242086958',
        },
        {
            name: 'american-express',
            number: '371449635398431',
        },
        {
            name: 'discover',
            number: '6011619939440799',
        },
        {
            name: 'mir',
            number: '220220018622201',
        },
        {
            name: 'jcb',
            number: '3535241697993911',
        },
    ]

    cards.forEach(item => {
        const result = checkSystemPay(item.number);

        expect(result).toEqual(item.name);
    })
})