import { formateDateWords } from '../utils/formateDateWords';

export default class NewsCard {

    create(date, text, title, infoagency, link, url) {
        const card = document.createElement('a');
        const cardImage = document.createElement('div');
        const cardDate = document.createElement('p');
        const cardTitle = document.createElement('p');
        const cardText = document.createElement('p');
        const cardInfoagency = document.createElement('p');
        const formattedDateWords = formateDateWords(date);
    
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
    
        cardDate.textContent = formattedDateWords;
        cardTitle.textContent = title;
        cardText.textContent = text;
        cardInfoagency.textContent = infoagency;
        cardImage.style.backgroundImage = `url(${link})`;
        
        /*this.cardDate = cardDate;
        this.cardTitle = cardTitle;
        this.cardText = cardText;
        this.cardInfoagency = cardInfoagency;*/
        this.url = url;

    card.addEventListener('click', () => {
        window.open(url);
    });

        return card;
    };

    
    
    
}