import './checkButton.css'

export class Button {

    renderButton(){
        const button = document.createElement('a');
        button.classList.add('button');
        button.textContent = 'Check to validate';

        return button;
    }
}