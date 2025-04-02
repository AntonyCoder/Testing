import './widget.css'
import { CardBlock } from '../cardBlock/cardBlock';
import { Input } from '../input/input';
import { Button } from '../checkButton/checkButton';

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

        const from = document.createElement('form');
        from.classList.add('input-button-block');
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        element.appendChild(widget);
        widget.appendChild(this.cardBlock.renderCardBlock());
        widget.appendChild(from);
        from.appendChild(formGroup);
        formGroup.appendChild(this.input.renderInput());
        formGroup.appendChild(this.button.renderButton());


    }
}