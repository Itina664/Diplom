//класс для отрисовки карточек на странице
export default class NewsCardList {
    constructor(cardsContainer, card) {
      this.container = cardsContainer;
      this.card = card;
    };
  
    addCard = (date, text, title, infoagency) => {
      this.container.
      appendChild(this.card().create(date, text, title, infoagency));
    };

    reset(date, text, title, infoagency) {
      date.value = '';
      text.value = '';
      title.value = '';
      infoagency.value = '';
    };
  }