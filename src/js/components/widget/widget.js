import { CardBlock } from '../cardBlock/cardBlock.js';
import { Input } from '../input/input.js';
import { Button } from '../checkButton/checkButton.js';
import { isValid } from '../../algorithmLuhn.js';
import { checkSystemPay } from '../../checkSystemPay.js';
import './widget.css';

export class Widget {
    constructor(element) {
        this.element = element;
        this.cardBlock = new CardBlock();
        this.input = new Input();
        this.button = new Button();
    }

    //Отрисовка виджета
    renderWidget() {
        const element = document.querySelector(this.element);

        const widget = document.createElement('div');
        widget.classList.add('widget');

        const title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = 'Check your credit card number';

        const from = document.createElement('form');
        from.classList.add('input-button-block');
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        const inputElement = this.input.renderInput();
        const buttonElement = this.button.renderButton()
        const cardBlockElement = this.cardBlock.renderCardBlock()

        element.appendChild(widget);
        widget.appendChild(title);
        widget.appendChild(cardBlockElement);
        widget.appendChild(from);
        from.appendChild(formGroup);
        formGroup.appendChild(inputElement);
        formGroup.appendChild(buttonElement);

        inputElement.addEventListener('input', showSystemPay);

        function showSystemPay() {
            let cardNumber = inputElement.value;
            const cards = cardBlockElement.querySelectorAll('.card-image');
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

        buttonElement.addEventListener('click', checkValidNumber);

        function checkValidNumber() {
            const cardNumber = inputElement.value;
            if (isValid(cardNumber)) {
                inputElement.classList.add('input-valid');
                inputElement.classList.remove('input-invalid');
            } else {
                inputElement.classList.add('input-invalid');
                inputElement.classList.remove('input-valid');
            }
        }
    }
}