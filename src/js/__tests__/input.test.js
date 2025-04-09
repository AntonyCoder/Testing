/**
 * @jest-environment jsdom
 */

import { Widget } from "../components/widget/widget"


test('check valid card number', () => {

    const widget = new Widget('body')
    widget.renderWidget();

    const input = document.querySelector('.input');
    const button = document.querySelector('.button');

    input.value = '371449635398431';
    button.click();

    expect(input.classList.contains('input-valid')).toEqual(true);
})

test('check invalid card number', () => {

    const widget = new Widget('body')
    widget.renderWidget();

    const input = document.querySelector('.input');
    const button = document.querySelector('.button');

    input.value = '3714496353984';
    button.click();

    expect(input.classList.contains('input-invalid')).toEqual(true);
})