import { Widget } from "./components/widget/widget";
import { isValid } from "./algorithmLuhn";
import { checkSystemPay } from "./checkSystemPay";

const widget = new Widget('body')
widget.renderWidget()

const input = document.querySelector('.input');
const cards = document.querySelectorAll('.card-image');

input.addEventListener('input', showSystemPay);

function showSystemPay() {
    let cardNumber = input.value;
    console.log('true');
    if (!isNaN(cardNumber)) {
        const cardName = checkSystemPay(cardNumber);
        cards.forEach((item) => {
            if (cardName !== 'Unknown' && !item.classList.contains(cardName)) {
                item.classList.add('card-image-disabled');
            } else {
                item.classList.remove('card-image-disabled');
            }
        })

    }



}