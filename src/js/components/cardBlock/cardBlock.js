import './cardBlock.css';

export class CardBlock {

    renderCardBlock() {
        const cardBlock = document.createElement('ul');
        cardBlock.classList.add('card-block');

        const cards = this.renderCard();

        cards.forEach(item => {
            cardBlock.appendChild(item);
        })

        return cardBlock;
    }


    //Отрисовка изображений с картами
    renderCard() {
        const cards = [
            {
                class: 'mastercard',
                src: '/img/mastercard.png',
            },
            {
                class: 'visa',
                src: '/img/visa.png',
            },
            {
                class: 'american-express',
                src: '/img/american-express.png',
            },
            {
                class: 'discover',
                src: '/img/discover.png',
            },
            {
                class: 'mir',
                src: '/img/mir.png',
            },
            {
                class: 'jcb',
                src: '/img/jcb.png',
            },
        ]

        const cardsArr = [];
        cards.forEach(item => {
            const card = document.createElement('li');
            const cardImage = document.createElement('span');

            cardImage.classList.add('card-image', item.class);
            cardImage.style.backgroundImage = `url(${item.src})`;
            cardImage.title = item.class

            card.appendChild(cardImage);

            cardsArr.push(card);
        })
        return cardsArr;
    }
}