import { Widget } from "./components/widget/widget.js";
import { isValid } from "./algorithmLuhn";
import { checkSystemPay } from "./checkSystemPay";

const widget = new Widget('body')
widget.renderWidget()

const input = document.querySelector('.input');
const cards = document.querySelectorAll('.card-image');
const button = document.querySelector('.button');

input.addEventListener('input', showSystemPay);

function showSystemPay() {
    let cardNumber = input.value;
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

button.addEventListener('click', checkValidNumber);

function checkValidNumber(){
    const cardNumber = input.value;
    if(isValid(cardNumber)){
        input.classList.add('input-valid');
        input.classList.remove('input-invalid');
    } else {
        input.classList.add('input-invalid');
        input.classList.remove('input-valid');
    }
}