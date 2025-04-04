import { CardBlock } from '../cardBlock/cardBlock.js';
import { Input } from '../input/input.js';
import { Button } from '../checkButton/checkButton.js';
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

        element.appendChild(widget);
        widget.appendChild(title);
        widget.appendChild(this.cardBlock.renderCardBlock());
        widget.appendChild(from);
        from.appendChild(formGroup);
        formGroup.appendChild(this.input.renderInput());
        formGroup.appendChild(this.button.renderButton());
    }
}