//класс для отрисовки карточек на странице
class NewsCardList {
    constructor(cardsContainer, card) {
      this.container = cardsContainer;
      this.card = card;
    };
  
    addCard = (date, text, title, infoagency, link) => {
      this.container.
      appendChild(this.card().create(date, text, title, infoagency, link));
    }
  }