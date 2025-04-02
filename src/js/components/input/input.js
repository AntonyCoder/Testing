import './input.css'

export class Input{
    
    renderInput() {
        const input = document.createElement('input');
        input.classList.add('input');
        input.type = 'text';
        input.placeholder = 'Credit card number';
    
        return input;
    }
}
