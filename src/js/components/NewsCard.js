export default class NewsCard {
    constructor(newsCard) {
        this.newsCard = newsCard;
    }
  
    create(date, text, title, infoagency, link) {
        const newsCard = document.createElement('a');
        const cardImage = document.createElement('div');
        const cardDate = document.createElement('p');
        const cardTitle = document.createElement('p');
        const cardText = document.createElement('p');
        const cardInfoagency = document.createElement('p');
    
        newsCard.classList.add('section-result__card-link');
        cardImage.classList.add('section-result__card-image');
        cardDate.classList.add('section-result__card-date');
        cardTitle.classList.add('section-result__card-title');
        cardText.classList.add('section-result__card-text');
        cardInfoagency.classList.add('section-result__card-infoagency');
    
        newsCard.appendChild(cardImage);
        newsCard.appendChild(cardDate);
        newsCard.appendChild(cardTitle);
        newsCard.appendChild(cardText);
        newsCard.appendChild(cardInfoagency);
    
        cardDate.textContent = date;
        cardTitle.textContent = title;
        cardText.textContent = text;
        cardInfoagency.textContent = infoagency;
        cardImage.style.backgroundImage = `url(${link})`;
        
        this.cardDate = cardDate;
        this.cardTitle = cardTitle;
        this.cardText = cardText;
        this.cardInfoagency = cardInfoagency;
    
        return newsCard;
    };
}