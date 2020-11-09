//класс для отрисовки карточек на странице
export default class NewsCardList {
    constructor(cardsContainer, card) {
      this.container = cardsContainer;
      this.card = card;
    };
  
    addCard (date, text, title, infoagency, link)  {
      this.container.appendChild(this.card.create(date, text, title, infoagency, link));
    };

    /*removeCard() {
      this.container.innerHTML = '';
    };*/

    render(result) {
      /*this.removeCard();*/
      result.forEach((item) => {
        this.addCard(item.publishedAt, item.description, item.title, item.source.name, item.urlToImage);
      });
    };
  }