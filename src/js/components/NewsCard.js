import { formateDate } from '../utils/formateDate';

export default class NewsCard {
    /*constructor(card) {
        this.card = card;
    }*/

    create(date, text, title, infoagency, link) {
        const card = document.createElement('a');
        const cardImage = document.createElement('div');
        const cardDate = document.createElement('p');
        const cardTitle = document.createElement('p');
        const cardText = document.createElement('p');
        const cardInfoagency = document.createElement('p');
        const formattedDate = formateDate(date);
    
        card.classList.add('section-result__card-link');
        cardImage.classList.add('section-result__card-image');
        cardDate.classList.add('section-result__card-date');
        cardTitle.classList.add('section-result__card-title');
        cardText.classList.add('section-result__card-text');
        cardInfoagency.classList.add('section-result__card-infoagency');
    
        card.appendChild(cardImage);
        card.appendChild(cardDate);
        card.appendChild(cardTitle);
        card.appendChild(cardText);
        card.appendChild(cardInfoagency);
    
        cardDate.textContent = formattedDate;
        cardTitle.textContent = title;
        cardText.textContent = text;
        cardInfoagency.textContent = infoagency;
        cardImage.style.backgroundImage = `url(${link})`;
        
        this.cardDate = cardDate;
        this.cardTitle = cardTitle;
        this.cardText = cardText;
        this.cardInfoagency = cardInfoagency;
    
        return card;
    };

    /*formateDate() {
        const date = new Date();
        console.log(`dateFD= ${date}`);
    
        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    
    }*/
}